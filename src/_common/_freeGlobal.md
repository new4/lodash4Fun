# freeGlobal

检测 `node` 环境中的全局对象

- 是一个对象
- 存在且有一个 `Object` 属性

```js
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
```
