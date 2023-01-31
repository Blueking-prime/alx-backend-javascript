export default function getStudentIdsSum(studentList) {
  return [...studentList].reduce((sum, x) => sum + x.id, 0);
}
