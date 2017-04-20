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

默认的 'isNaN' 方法, 即注册在全局 'global' 对象上的方法，操作 'undefined' 的时候会返回 'true'

```js
console.log(isNaN(undefined)); // true
console.log(_.isNaN(undefined)); // false
```

判断方式：

1. 首先判断是 `number`
2. value != +value, '+' 将可能的字符串 'NaN' 转换一下
