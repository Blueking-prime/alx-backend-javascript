export default function getListStudentIds(studentList) {
  if (studentList instanceof Array) {
    return [...studentList].map((x) => x.id);
  }
  return [];
}
