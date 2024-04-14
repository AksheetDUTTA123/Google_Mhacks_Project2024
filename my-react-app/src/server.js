const app = require('express');
const spawn = require("child_process").spawn;
const port = 3000

app.post('/upload', upload.single('file'), (req, res) => {
    console.log("upload button clicked.... i think")
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        var store = req.query.store;
        var price = req.query.price;
    }
    catch {
        console.log("failed to render API")
        res.send("ERROR 403: FAILED: INCORRECT PARAMS: '/retrieve?store=...&price=....");
    }
    spawn('python3',['handle_card.py', store, price.toString()]).stdout.on('data', (data) => {
        console.log("python: " + data);
        res.send(data);
    });
});
