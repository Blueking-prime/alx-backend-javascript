export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return [...studentList].map((x) => {
    for (const i of [...newGrades]) {
      if (x.id === i.studentId) {
        x.grade = i.grade; // eslint-disable-line no-param-reassign
      }
    }
    if (x.grade === undefined) {
      x.grade = 'N/A'; // eslint-disable-line no-param-reassign
    }
    return x;
  }).filter((x) => x.location === city);
}
