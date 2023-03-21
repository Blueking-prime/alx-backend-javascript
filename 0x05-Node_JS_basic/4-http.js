const http = require('http');

const hostname = '0.0.0.0';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello Holberton School!');
});

app.listen(port, hostname, () => {});

module.exports = app;
