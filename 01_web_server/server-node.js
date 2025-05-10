const { log } = require("console");
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("hello! this is pk.");
  } else if (req.url === "/ice-tea") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("this is ice-tea !!");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("File nahi mil rahi bidu !!!");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is listening at http://${hostname}:${port}`);
});
