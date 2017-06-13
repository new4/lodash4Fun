var nativeFloor = Math.floor,
  nativeRandom = Math.random;

function baseRandom(lower, upper) {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
}

function shuffleSelf(array, size) {
  var index = -1,
    length = array.length,
    lastIndex = length - 1;

  size = size === undefined
    ? length
    : size;
  while (++index < size) {
    console.log("--------");
    var rand = baseRandom(index, lastIndex),
      value = array[rand];

    array[rand] = array[index];
    array[index] = value;
  }
  array.length = size;
  return array;
}

console.log(shuffleSelf([
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10
]))
