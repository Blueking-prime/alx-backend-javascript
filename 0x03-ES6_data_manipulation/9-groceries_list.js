export default function groceriesList() {
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  const map = new Map();
  for (const key of Object.keys(obj)) {
    map.set(key, obj[key]);
  }
  return map;
}
