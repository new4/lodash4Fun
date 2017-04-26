# isArrayLike

类数组, 有属性 `length`

调用 `isArrayLike(value)`

1. `value` 存在
2. `value.length` 存在且有效
3. 非 `function`

```js
_.isArrayLike([1, 2, 3]); // true
_.isArrayLike(document.body.children); // true
_.isArrayLike('abc'); // true
```
