const app = require('express');
const spawn = require("child_process").spawn;
const port = 3000

// Require the upload middleware
const upload = require('./upload');

app.post('/upload', upload.single('file'), (req, res) => {
    console.log("upload button clicked.... i think")
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (!req.file) {
        return res.status(400).send('No files were uploaded.');
    }
    res.send('File uploaded successfully.');

    spawn('python3',['handle_card.py', store, price.toString()]).stdout.on('data', (data) => {
        console.log("python: " + data);
        res.send(data);
    });
});

app.listen(port, () => {
    console.log("listening...");
});