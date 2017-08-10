# root

获取根对象，即获取全局对象的过程

- 检测全局中的 `global` 对象
- 检测全局中的 `self` 对象
- 执行 `Function('return this')()`

关于 `Function('return this')()` , 关于[函数语法](https://developer.mozilla.org/ca/docs/Web/JavaScript/Reference/Global_Objects/Function):

```js
new Function ([arg1[, arg2[, ...argN]],] functionBody)
```
