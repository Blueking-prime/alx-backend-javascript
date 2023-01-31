export default function updateUniqueItems(map) {
  try {
    for (const i of map.keys()) {
      if (map.get(i) === 1) {
        map.set(i, 100);
      }
    }
    return map;
  } catch (err) {
    throw new Error('Cannot process');
  }
}
