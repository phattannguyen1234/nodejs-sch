const http = require('http');
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');
const fb = require('fibo-lib');



const data = fs.readFileSync(`${__dirname}/fibonnaci.html`,'utf-8');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const pathName = parsedUrl.pathname;
    console.log(pathName);

    const query = querystring.parse(parsedUrl.query);

    if (pathName ==='/' || pathName ==='/overview'){
        res.end('This is the OVERVIEW');
    }else if (pathName ==='/product')
        {
            res.end('This is the PRODUCT');
        }
    else if (pathName ==='/fibo')
        {
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
            }
            
        }
    else {
        res.writeHead(404, {'Content-type': 'text/html',
                            'my-own-header': 'hello-world'});
        res.end('<h1> Page not found!</h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
  });