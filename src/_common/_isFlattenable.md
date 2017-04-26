# isFlattenable

实现:

1. 数组是可以展开的对象
2. `arguments` 是可以展开的对象
3. 处理类数组对象, 其属性 `Symbol.isConcatSpreadable` 为 `true`, 那么它是可以展开的对象

内置的 `Symbol.isConcatSpreadable` 符号用于配置某对象作为 `Array.prototype.concat()` 方法的参数时是否展开其数组元素

## 数组对象

```js
var alpha = ['a', 'b', 'c'],
    numeric = [1, 2, 3];

var alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // 结果: ['a', 'b', 'c', 1, 2, 3]
```

设置 `Symbol.isConcatSpreadable` 为 `false` :

```js
var alpha = ['a', 'b', 'c'],
    numeric = [1, 2, 3];

numeric[Symbol.isConcatSpreadable] = false;
var alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // 结果: ['a', 'b', 'c', [1, 2, 3] ]
```

## 类数组对象

对于类数组对象, 默认不展开。期望展开其元素用于连接, 需要设置 `Symbol.isConcatSpreadable` 为 `true`

```js
var x = [1, 2, 3];

var fakeArray = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: "hello",
  1: "world"
}

x.concat(fakeArray); // [1, 2, 3, "hello", "world"]
```
