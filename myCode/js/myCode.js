console.log(new Map()[Symbol.toStringTag])
console.log(new Set()[Symbol.toStringTag])
console.log(Promise.resolve()[Symbol.toStringTag])

try {
  var set = new Set();
  set[Symbol.toStringTag] = undefined;
  var unmasked = true;
} catch (e) {
}

console.log("1 -- ", unmasked);



try {
  'aaa'[Symbol.toStringTag] = undefined;
  console.log("1e ");
} catch (e) {
}

console.log(Object.prototype.toString.call(new Map()));
console.log(Object.prototype.toString.call(function* (){}));
console.log(Object.prototype.toString.call(new Set()));