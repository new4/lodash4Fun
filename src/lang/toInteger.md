# toInteger

对 `value` 的转换方法：

1. 将 `value` 转换成有限数值，并求其除 `1` 的余数
2. 有余数，就返回减去余数后的值
3. 注意区分 `-0` 的情形

```js
console.log(_.toInteger(0)) // 0
console.log(_.toInteger(-0)) // -0
```
