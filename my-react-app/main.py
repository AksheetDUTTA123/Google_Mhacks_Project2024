import os
import google.generativeai as genai
from pdf2image import convert_from_path
import asyncio
from PIL import Image
import subprocess
import sys

def setup_API():
    # get the API key
    genai.configure(api_key=os.environ['GOOGLE_API_KEY'])
    model = genai.GenerativeModel('models/gemini-1.5-pro-latest', system_instruction='You are a LaTeX expert who loves making cheat sheets',
                                generation_config=genai.GenerationConfig(
                                temperature=0,
                                ))
    return model

def pdf_to_images(notes):
    # get images from the pdf file
    images = convert_from_path(notes)
    for i in range(len(images)):
        images[i].save('page'+ str(i) +'.jpg', 'JPEG')

    files = []
    for i in range(len(images)):
        filename = 'page'+str(i)+'.jpg'
        display_name = 'page'+str(i)
        my_file = genai.upload_file(path=filename, display_name=display_name)
        # print(f"Uploaded file '{my_file.display_name}' as: {my_file.uri}")

        file = genai.get_file(name=my_file.name)
        # print(f"Retrieved file '{file.display_name}' as: {my_file.uri}")
        files.append(file)
    return files

def gemini_output(files, model, notes, images):
    num_pages = 2
    num_words = 1500*(num_pages-1)

    # do the prompt and get LaTeX code
    prompt = f"""Carefully scan these images and generate LaTeX code 
                that summarizes all of these notes into at most {num_words} words.
                Make an outline with bullets and subbullets.
                To do bullet points, use the command itemize with items.
                Assume that the document already has the necessary packages 
                and is set up. Only generate the code for the headers and bullet points."""

    files.insert(0, prompt)
    response = model.generate_content(files).text
    response = response.replace("\\begin{document}", "")
    response = response.replace("\\end{document}", "")
    response = response.replace("'''", "")

    # put the LaTeX response into a tex file
    fout = open('test.tex', 'w')
    fout.write('''\\documentclass{article}
    \\usepackage{fullpage}
    \\usepackage{multicol}
    \\usepackage[margin=0.3in]{geometry}
    \\usepackage{graphicx}
    % Set line spacing
    \\renewcommand{\\baselinestretch}{0.3}
    \\begin{document}
    \\begin{multicols}{2}''')
    fout.write(response)
    fout.write('\\end{multicols}\n')

    # #### INSERTING IMAGES INTO tex ####
    total_area = 0;
    for i in images:
        img = Image.open(i);
        width, height = img.size
        total_area += width*height

    # if(total_area > 100000): # do text on first page and pagebreak and then only images second page
    #     fout.write('''\\pagebreak
    # \\begin{multicols}{3}''')
    # else: # can do text on second page too
    #     fout.write('\\begin{multicols}{3}\n')
    fout.write('\\begin{multicols}{3}\n')

    for i in images:
        fout.write('\\includegraphics[width=6cm]{' + i + '}\n')
    fout.write('\\end{multicols}\n')
    fout.write('\\end{document}')
    fout.close()

    # Run pdflatex command to compile LaTeX file
    process = subprocess.Popen(['pdflatex', 'test.tex'])
    process.communicate()  # Wait for the process to finish

    # Check if the process completed successfully
    if process.returncode != 0:
        raise Exception('pdflatex command failed')

def main(uploaded_files):
    print("HIIIII")
    model = setup_API()
    notes = uploaded_files[0]  # Assuming the first file is the PDF
    images = pdf_to_images(notes)
    gemini_output(images, model, notes)
    print("BYEEE")

if __name__ == "__main__":
    main(sys.argv[1:])  # Pass command-line arguments except the script name