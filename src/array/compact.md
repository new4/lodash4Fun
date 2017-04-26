# compact

调用 `compact(array)` 过滤掉数组 `array` 中的假值, 返回不包含假值的新数组

假值有: `false`, `null`, `0`, `""`, `undefined`, `NaN`

```js
console.log(!!false); // false
console.log(!!null); // false
console.log(!!0); // false
console.log(!!""); // false
console.log(!!undefined); // false
console.log(!!NaN); // false
```

实现：

1. 检查下参数
2. 通过 `if(value)` 来判断是否是假值
