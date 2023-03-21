function readDatabase (path) {
  const fs = require('fs');
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', function (err, data) {
      if (err) {
        reject(Error('Cannot load the database'));
      }
      const dataList = data.trim().split('\n');
      dataList.shift();

      const fields = new Set();
      for (let i = 0; i < dataList.length; i++) {
        dataList[i] = dataList[i].split(',');
        fields.add(dataList[i][3]);
      }
      const output = {};
      for (const field of [...fields]) {
        const fieldList = [];
        for (let i = 0; i < dataList.length; i++) {
          if (dataList[i][3] === field) {
            fieldList.push(dataList[i][0]);
          }
        }
        output[field] = fieldList;
      }
      resolve(output);
    });
  });
}

module.exports = readDatabase;
