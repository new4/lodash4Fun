# _overArg

```js
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
```

调用 `overArg(func, transform)` , 会返回一个函数, 新函数的参数会被 `transform` 转换一下再供 `func` 调用。
