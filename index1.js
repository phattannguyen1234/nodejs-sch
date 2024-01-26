const fb = require('fibo-lib');

console.log(fb.fibo(20));

/*const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    try {
        // Using axios to make an HTTP request to an external API
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        res.send(`<h1>Title: ${response.data.title}</h1>`);
    } catch (error) {
        res.send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});*/
