const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents (request, response) {
    response.status(200);
    readDatabase(process.argv[2])
      .then((output) => {
        const head = 'This is the list of our students\n';
        let body = '';
        for (const i of [...Object.keys(output)]) {
          body += `Number of students in ${i}: ${output[i].length}. List: ${output[i].join(', ')}\n`;
        }
        response.send(head + body.slice(0, -1));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor (request, response) {
    response.status(200);
    if (request.params.major === 'CS') {
      readDatabase(process.argv[2])
        .then((output) => {
          response.send(`List: ${output.CS.join(', ')}`);
        })
        .catch(() => {
          response.status(500).send('Cannot load the database');
        });
    } else if (request.params.major === 'SWE') {
      readDatabase(process.argv[2])
        .then((output) => {
          response.send(`List: ${output.SWE.join(', ')}`);
        })
        .catch(() => {
          response.status(500).send('Cannot load the database');
        });
    } else {
      response.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;
