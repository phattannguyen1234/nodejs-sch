const express = require('express');
const fs = require('fs');
const fb = require('fibo-lib');
const url = require('url');
const querystring = require('querystring');


// Serve overview page
app.get('/', (req, res) => {
    res.send('This is the OVERVIEW');
});

app.get('/overview', (req, res) => {
    res.send('This is the OVERVIEW');
});

// Serve product page
app.get('/product', (req, res) => {
    res.send('This is the PRODUCT');
});



// Serve fibonacci page
app.get('/fibo', (req, res) => {
    //extract the number in the query statement
    const parsedUrl = url.parse(req.url);    
    const query = querystring.parse(parsedUrl.query);
    console.log('processing fibonacci');

    if (query.number) {
        const n = parseInt(query.number);
        const result = fb.fibo(n);

        console.log(`client push button ${n}`);
        
        const dynamicData = `<p>Fibonacci sequence up to ${n}:</p><p>${result}</p>`;
        //const modifiedData = data.replace('{{DYNAMIC_DATA}}', dynamicData);
        //console.log(modifiedData);
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(dynamicData);
        //res.end('page not found');

    }
    else {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(data);
    };
});

app.get('/fibo/upload', (req, res) => {
    console.log('xu ly upload page');
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(data_upload);
});

app.get('/list-files', (req, res) => {
    const directoryPath = `${__dirname}/fibo-result`;
    // console.log(directoryPath);
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.log('Unable to scan directory: ' + err);
            res.status(500).send('Unable to list files');
        } else {
            // Listing all files using forEach
            let fileList = files.map(file => file).join('\n');
            res.send(fileList);
        }
    });
});

// Handle 404 - Page not found
app.use((req, res) => {
    res.status(404).send('<h1>Page not found!</h1>');
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Listening to requests on port ${PORT}`);
});
