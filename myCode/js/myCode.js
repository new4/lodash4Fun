
/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
// -|+在js中都可以作为unary operator, 也就是sign, 所以0xf => +0xf => 15, -0xf => -15, bad的含义在于这不是正常的正负数的16进制表示法
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

function toNumber(value) {
  if (typeof value == 'number') {
    console.log("typeof value == number");
    return value;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

console.log(_.toNumber("+0xf")) // NaN
console.log(_.toNumber("-0xf")) // NaN
console.log(_.toNumber(+0xf)) // +15
console.log(_.toNumber(-0xf)) // -15
console.log(typeof +0xf) // number
console.log(typeof -0xf) // number
console.log(Number(+0xf)) // 15
console.log(Number(-0xf)) // -15
