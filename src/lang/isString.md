# isString

判断方法：

1. `typeof` 操作符的作用结果为 'string'
2. 或者，被判断的对象是类对象且其标签为 '[object String]'

```js
console.log(_.isString("123")); // true
console.log(_.isString(String(123))); // true
```