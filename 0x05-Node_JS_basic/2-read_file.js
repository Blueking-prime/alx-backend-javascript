function countStudents (path) {
  const fs = require('fs');

  fs.readFile(path, 'utf-8', function (err, data) {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const dataList = data.trim().split('\n');
    dataList.shift();
    console.log('Number of students: %d', dataList.length);

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
      console.log('Number of students in %s: %d. List: %s', field, fieldList.length, fieldList.join(', '));
    }
  });
}

module.exports = countStudents;
