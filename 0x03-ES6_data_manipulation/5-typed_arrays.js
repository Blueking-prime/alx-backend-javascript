export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);
    const int8view = new Int8Array(buffer);
    int8view[position] = value;
    return new DataView(buffer, 0, length);
  } catch (err) {
    throw new Error('Position outside range');
  }
}
