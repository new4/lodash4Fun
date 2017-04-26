# isArrayLikeObject

类数组对象, 是一个有属性 `length` 的对象

实现

1. `isObjectLike(value)`
2. `isArrayLike(value)`

```js
_.isArrayLike('abc'); // true
_.isArrayLikeObject('abc'); // false
```
