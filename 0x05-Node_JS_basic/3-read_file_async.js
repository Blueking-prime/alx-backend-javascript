function countStudents(path) {
  const fs = require('fs');
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      }
      const dataList = data.trim().split('\n');
      dataList.shift();
      console.log('Number of students: %d', dataList.length);

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
        console.log('Number of students in %s: %d. List: %s', field, fieldList.length, fieldList.join(', '));
      }
      resolve(data);
    });
  });
}

module.exports = countStudents;
