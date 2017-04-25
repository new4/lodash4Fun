function foo() {
  console.log("foo");
}
var beforeFunc = _.before(3, foo);

var afterFunc = _.after(3, foo);

console.log(_.isString("123")); // true
console.log(_.isString(String(123))); // true


