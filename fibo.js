const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const query = querystring.parse(parsedUrl.query);

    if (parsedUrl.pathname === '/fibonacci' && query.number) {
        // Extract the number from the query parameters
        const n = parseInt(query.number);

        // Calculate the Fibonacci sequence
        const fibonacciSequence = calculateFibonacci(n);

        // Send the response as JSON
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ input: n, output: fibonacciSequence }));
    } else {
        // Send a 404 response for invalid routes
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

function calculateFibonacci(n) {
    const fibonacciSequence = [0, 1];
    for (let i = 2; i <= 10; i++) {
        fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    }
    return fibonacciSequence;
}

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
