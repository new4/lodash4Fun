# isInteger

- 值 `value` 是数值类型
- `value` 通过方法 `toInteger` 转换之后与原值相等

注：源码中使用 `==` 来进行比较，意味着 `3.0` 被认为是整数，其与 `3` 等值。

```js
console.log(_.isInteger(3.0)); // true
```