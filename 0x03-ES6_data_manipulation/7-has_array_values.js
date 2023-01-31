export default function hasValuesFromArray(set, array) {
  let state = false;
  for (const i of [...array]) {
    state = set.has(i);
  }
  return state;
}
