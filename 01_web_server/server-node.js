const { log } = require('console');
const http = require('http');
const hostname = '127.0.0.1';
const port = 5500;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end("hello! this is pk.")
})

server.listen(port, hostname, () => {
    console.log(`Server is listening at http://${hostname}:${port}`);
})