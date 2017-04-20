# isNaN

`NaN` 的两个特点：

- 任何涉及 `NaN` 的操作都会返回 `NaN`
- `NaN` 与任何值都不相等，包括 `NaN` 本身

```js
console.log(0/0) // NaN
console.log(1/0) // Infinity 
console.log(-1/0) // -Infinity
console.log(NaN === NaN) // false
```
