# isObject

通过 `typeof` 操作符来判断。

`typeof` 操作的可取值:

取值|对应
---|----
"undefined" | **未定义**
"boolean"   | **布尔值**
"string"    | **字符串**
"number"    | **数值**
"object"    | **对象**或**null**
"function"  | **函数**

```javascript
console.log(typeof unknownVariable) // 'undefined'
console.log(typeof undefined) // 'undefined'
console.log(typeof null)  // 'object'
console.log(typeof true)  // 'boolean'
console.log(typeof 123) // 'number'
console.log(typeof "abc") // 'string'
console.log(typeof function() {}) // 'function'
console.log(typeof {})  // 'object'
console.log(typeof [])  // 'object'
console.log(typeof new RegExp())  // 'object'
console.log(typeof new Number(0)) // 'object'
console.log(typeof new String(''))  // 'object'
```

判断是否是 `object` 的方法：不是 `null` 且用 `typeof` 操作符之后的值为 `object` 或 `function`

代码如下：

```javascript
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
```
