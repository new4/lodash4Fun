# before

调用 `before(n, func)` 会返回一个新的函数, 该新函数最多会执行 `n - 1` 次, 返回的是 `func` 函数执行的结果, 实质就是 `func` 函数会执行 `n - 1` 次

实现方式：

1. 检查 `n` 的值，不小于 `1` 就返回调用 `func.apply(this, arguments)` 的结果
2. 否则，将 `func` 设置为 `undefined`
3. 注意检测参数 `n` 和 `func`

例子：

```html
<button onclick="beforeFunc()">before</button>
```

```js
function foo(){
    console.log("foo");
}
var beforeFunc = _.before(3, foo);
// 点击按钮，从第 3 次开始就不会打印 "foo" 了
```