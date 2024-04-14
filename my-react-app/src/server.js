const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const spawn = require("child_process").spawn;
const cors = require('cors');


const app = express();
app.use(cors());
// Multer configuration for file upload
const upload = multer({ dest: 'upload/' });

const db = {};

// POST endpoint for file upload
app.post('/upload', upload.array('file', 10), (req, res) => {
    // Array to store uploaded file paths
    console.log("files uploading...")
    const uploadedFiles = [];

    res.setHeader('Access-Control-Allow-Origin', '*');

    // Process each uploaded file
    req.files.forEach(file => {
        // Example: Post-processing - Rename uploaded files
        const newName = `${Date.now()}-${file.originalname}`;
        const newPath = path.join(__dirname, 'processed_files', newName);
        
        // Move the uploaded file to a new location
        fs.renameSync(file.path, newPath);

        // Store the path of the processed file
        uploadedFiles.push(newPath);
    });
    db.uploadedFiles = uploadedFiles;
    // Send response with the paths of processed files ye or ney
    res.json({ files: uploadedFiles });
    console.log("upload done")
});

app.get('/generating', (req, res) => {
    console.log("now running python script")
    res.setHeader('Access-Control-Allow-Origin', '*');

     // // Spawn a Python process
    // const pythonProcess = spawn('python', ['main.py', ...uploadedFiles]);
    const uploadedFiles = db.uploadedFiles;

    spawn('python3',['main.py', ...uploadedFiles]).stdout.on('data', (data) => {
        console.log("python: " + data);
        res.send(data);
    });
    console.log("end")
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
