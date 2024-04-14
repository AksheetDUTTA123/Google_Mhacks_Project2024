const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const spawn = require("child_process").spawn;

const app = express();
console.log("eyfrfyb");
// Multer configuration for file upload
const upload = multer({ dest: 'uploads/' });

// POST endpoint for file upload
app.post('/uploadFiles', upload.array('file', 10), (req, res) => {
    // Array to store uploaded file paths
    console.log("here")
    const uploadedFiles = [];

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

    // Send response with the paths of processed files
    res.json({ files: uploadedFiles });

        // Spawn a Python process
        const pythonProcess = spawn('python', ['main.py', ...uploadedFiles]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
