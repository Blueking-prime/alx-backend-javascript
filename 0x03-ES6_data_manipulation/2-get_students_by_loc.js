export default function getStudentsByLocation(studentList, city) {
  return [...studentList].filter((x) => x.location === city);
}
