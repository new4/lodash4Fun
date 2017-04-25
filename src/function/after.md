# after

调用 `after(n, func)` 会返回一个新的函数, 该新函数在触发了 `n` 次之后执行(且之后每次触发都会执行), 返回的是 `func` 函数执行的结果, 实质就是 `func` 函数会在第 `n` 次执行

实现方式：

1. 检查 `--n` 的值，小于 `1` 就返回调用 `func.apply(this, arguments)` 的结果
2. 注意检测参数 `n` 和 `func`

例子：

```html
<button onclick="afterFunc()">after</button>
```

```js
function foo(){
    console.log("foo");
}
var afterFunc = _.after(3, foo);
// 点击按钮，从第 3 次开始会打印出 "foo"
```