# _getPrototype

'ES5' 增加了一个新方法, 叫 'Object.getPrototypeOf()', 在所有支持的实现中，这个方法返回 '[[Prototype]]' 的值。

使用 `Object.getPrototypeOf()` 可以方便地取得一个对象的原型。

源码：

```js
var getPrototype = overArg(Object.getPrototypeOf, Object);
```

调用方式：

```js
getPrototype(value);
```

即用 'Object' 包装一下 'value', 随后在包装好的新对象上调用 'Object.getPrototypeOf' 来获取对象的原型。