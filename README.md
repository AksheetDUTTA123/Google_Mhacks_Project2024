
# Noteworthy.ai

## Devpost Link : https://devpost.com/software/noteworthy-ai

## Inspiration

The inspiration behind our project came from some of the classes we have taken at the University of Michigan, where on exams we are allowed to make cheat sheets to use while taking them. This tool would streamline the process and ensure that less time is used up for manual work and more time can be spent actually studying.

## What It Does

Our hack takes in images of diagrams and tables you want included, and a PDF of your notes, and using Gemini 1.5 Pro, we turn your notes into a clean LaTeX document that incorporates your notes and diagrams and makes it not only machine-readable, but also beautiful and easy to use for studying. The user can then download both the .tex and the .pdf file, so that they can easily modify and view the document.
## How We Built It

We combined React.JS and Python to create a seamless experience for users. React along with Bootstrap enabled us to build a dynamic, interactive interface for users to upload notes and view the processed LaTeX documents. On the backend, we used Python and Gemini 1.5 Pro API to convert the files into a clean LaTeX document. Integrating the frontend and backend was a challenge, but using Express.js we managed to take the files that the user inputted and pass those into the Python script, which then outputted the .tex and .pdf files for downloading.

## Challenges We Ran Into

The biggest challenge in our project was the actual integration between the backend, where the files are processed and outputted, and the frontend, where the files are actually inputted by the user. We ran into many issues here, as none of us had a lot of prior experience with Express.js, but in the end, we managed to successfully integrate it.

## Accomplishments That We're Proud Of

 We are proud that we were able to develop using React.JS for the first time. It was a very cool first experience, and we noticed the power of being able to create dynamic and interactive webpages using React along with libraries like Bootstrap.

## What We Learned

We learned how to develop a front-end from scratch and how to integrate a Python backend and a React.JS frontend using Express.js.

## What's Next for Noteworthy.ai

 The next steps for Noteworthy.ai would be to take in a format like video, so for example, importing in a whole lecture or multiple lectures, and then potentially transcribing that audio into text and the video into charts and diagrams, making the power of this hack even more versatile. Another thing is to introduce more customization options, so that the user has more control over how their generated cheat sheet will look.
