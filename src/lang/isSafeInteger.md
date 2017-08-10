# isSafeInteger

- 调用方法 `isInteger` 判断是一个整数
- 值 `value` 位于区间 `[-(Math.pow(2, 53) -1), (Math.pow(2, 53) -1)]`

```js
_.isSafeInteger(3); // true
_.isSafeInteger(Math.pow(2, 53)); // false
_.isSafeInteger(Math.pow(2, 53) - 1); // true
_.isSafeInteger(NaN); // false
_.isSafeInteger(Infinity); // false
_.isSafeInteger('3'); // false
_.isSafeInteger(3.1); // false
_.isSafeInteger(3.0); // true
```