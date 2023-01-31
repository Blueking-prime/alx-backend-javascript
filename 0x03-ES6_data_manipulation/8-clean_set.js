export default function cleanSet(set, startString) {
  let text = '';
  let check = false;
  if (startString === '') {
    return text;
  }

  for (const i of set) {
    if (i.startsWith(startString, 0)) {
      if (check) {
        text += '-';
      }
      check = true;
      text += i.substring(startString.length);
    }
  }
  return text;
}
