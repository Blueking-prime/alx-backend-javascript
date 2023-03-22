const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const dataList = data.trim().split('\n');
    dataList.shift();
    console.log(`Number of students: ${ dataList.length}`);

    const fields = new Set();
    for (let i = 0; i < dataList.length; i += 1) {
      dataList[i] = dataList[i].split(',');
      fields.add(dataList[i][3]);
    }
    for (const field of [...fields]) {
      const fieldList = [];
      for (let i = 0; i < dataList.length; i += 1) {
        if (dataList[i][3] === field) {
          fieldList.push(dataList[i][0]);
        }
      }
      console.log(`Number of students in ${field}: ${fieldList.length}. List: ${fieldList.join(', ')}`);
    }
  });
}

module.exports = countStudents;
