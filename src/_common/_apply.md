# apply

调用 `apply(func, thisArg, args)` 将函数 `func` 中的 `this` 绑定到 `thisArg`, 同时传如参数 `args` 作为调用参数。

普通实现方式为 `func.apply(thisArg, args)`, 但是源码中针对 `args` 个数为 1/2/3 的情况进行了处理。
