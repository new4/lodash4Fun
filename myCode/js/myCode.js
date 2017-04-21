
var obj = Object.create({a: 1});
var Ctor = Object.getPrototypeOf(obj).constructor;
console.log(Function.prototype.toString.call(Object) === Function.prototype.toString.call(Ctor)); // true
