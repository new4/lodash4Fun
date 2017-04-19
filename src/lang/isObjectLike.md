# isObjectLike

类对象：值不是 `null` 且通过操作符 `typeof` 得到的结果为 `object`。

代码如下：

```javascript
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}
```
