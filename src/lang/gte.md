# gte

纯比较大小 `>=` , 不区分参数的类型

```js
console.log(_.gte("11", "2")); // false
console.log(_.gte(11, 2)); // true
console.log(_.gte("11", 2)); // true
console.log(_.gte(11, "2")); // true
```
