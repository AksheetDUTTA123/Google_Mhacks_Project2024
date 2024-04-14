
# Noteworthy.ai

## Devpost Link : https://devpost.com/software/noteworthy-ai

## Inspiration

The inspiration behind our project came from classes we have taken at the University of Michigan, where on exams we are allowed to create cheat sheets to use while taking them. This tool streamlines the process and ensures less time is spent on manual work, allowing more time for actual studying.

## What It Does

Our hack takes in images of diagrams and tables you want to include, along with a PDF of your notes. Using Gemini 1.5 Pro, we convert your notes into a clean LaTeX document that incorporates your notes and diagrams, making it machine-readable and visually appealing for studying. Users can then download both the .tex and .pdf files, allowing easy modification and viewing of the document.

## How We Built It

We combined React.js and Python to create a seamless experience for users. React, along with Bootstrap, enabled us to build a dynamic, interactive interface for users to upload notes and view the processed LaTeX documents. On the backend, we used Python and the Gemini 1.5 Pro API to convert the files into a clean LaTeX document. We integrated the frontend and backend using Express.js to handle the files the user inputs, process them, and output the .tex and .pdf files for downloading.

## Challenges We Ran Into

The biggest challenge was integrating the backend, where files are processed and outputted, with the frontend, where files are inputted by the user. We encountered many issues due to our limited prior experience with Express.js, but ultimately managed to successfully integrate the two.

## Accomplishments That We're Proud Of

  Developed using React.js for the first time, gaining valuable experience.
  Leveraged the power of creating dynamic and interactive web pages using React and libraries like Bootstrap.

## What We Learned

   How to develop a front-end from scratch.
   How to integrate a Python backend with a React.js frontend using Express.js.

## What's Next for Noteworthy.ai

  Incorporating video format input, such as importing entire lectures, and potentially transcribing audio into text and video into charts and diagrams.
  Introducing more customization options, giving users greater control over how their generated cheat sheet will look.
