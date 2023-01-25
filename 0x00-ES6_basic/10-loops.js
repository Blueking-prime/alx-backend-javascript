export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (const val of array) {
    array[i] = appendString + val; // eslint-disable-line no-param-reassign
    i += 1;
  }

  return array;
}
