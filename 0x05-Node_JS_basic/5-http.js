const http = require('http');

const hostname = '0.0.0.0';
const port = 1245;

function countStudents (path) {
  const fs = require('fs');
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', function (err, data) {
      if (err) {
        reject(Error('Cannot load the database'));
      }
      let output = '';
      const dataList = data.trim().split('\n');
      dataList.shift();
      output += `Number of students: ${dataList.length}\n`;

      const fields = new Set();
      for (let i = 0; i < dataList.length; i++) {
        dataList[i] = dataList[i].split(',');
        fields.add(dataList[i][3]);
      }
      for (const field of [...fields]) {
        const fieldList = [];
        for (let i = 0; i < dataList.length; i++) {
          if (dataList[i][3] === field) {
            fieldList.push(dataList[i][0]);
          }
        }
        output += `Number of students in ${field}: ${fieldList.length}. List: ${fieldList.join(', ')}\n`;
      }
      resolve(output);
    });
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const url = req.url;
  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    countStudents(process.argv[2])
      .then((output) => {
        res.write('This is the list of our students\n');
        res.end(output.slice(0, -1));
      })
      .catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  }
});

app.listen(port, hostname, () => {});

module.exports = app;
