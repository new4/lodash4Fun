# _getRawTag

获取值/对象的标签

## 关于 `Symbol.toStringTag`

[参考这里](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)

`Symbol.toStringTag` 是一个内置 `symbol`, 它通常作为对象的属性键使用, 对应的属性值应该为字符串类型, 这个字符串用来表示该对象的自定义类型标签, 通常只有内置的 `Object.prototype.toString()` 方法会去读取这个标签并把它包含在自己的返回值里。

对一些对象类型（ES6新增的），toString() 方法能识别它们是因为引擎为它们设置好了 toStringTag 标签：

```js
console.log(Object.prototype.toString.call(new Map())); // "[object Map]"
console.log(Object.prototype.toString.call(function* () {})); // "[object GeneratorFunction]"
console.log(Object.prototype.toString.call(Promise.resolve())); // "[object Promise]"
```

自己创建的类不会有这份特殊待遇, `toString()` 找不到 `toStringTag` 属性时只好返回默认的 `Object` 标签:

```js
class ValidatorClass {}
console.log(Object.prototype.toString.call(new ValidatorClass())); // "[object Object]"
```

当然也可以加上 `toStringTag` 属性, 这样你的类也会有自定义的类型标签了:

```js
class ValidatorClass {
  get[Symbol.toStringTag]() {
    return "Validator";
  }
}
console.log(Object.prototype.toString.call(new ValidatorClass())); // "[object Validator]"
```

## 实现

其实就是调用 

```js
Object.prototype.toString.call(value);
```

