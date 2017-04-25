# isPlainObject

简单对象：某对象通过 `Object` 构造函数创建的或者某对象的原型 `[[Prototype]]` 值为 `null`

判断 `value` 是简单对象的方法：

1. 排除非类对象的值，排除标签不是 '[object Object]' 的值
2. 调用 'Object.getPrototypeOf' 来获取对象 `Object(value)` 的原型
3. 原型为 `null` 的话，`value` 就是简单对象
4. 若原型上有 `constructor` 属性，取得该属性为 `Ctor`
5. 若该属性 `Ctor` 是函数，且是它自身的实例，且 `Function.prototype.toString.call(Object) == Function.prototype.toString.call(Ctor)`, 那就是简单对象

例子：

```js
var obj = Object.create({a: 1});
var Ctor = Object.getPrototypeOf(obj).constructor;
console.log(Function.prototype.toString.call(Object) === Function.prototype.toString.call(Ctor)); // true

console.log(Object instanceof Object); // true
```