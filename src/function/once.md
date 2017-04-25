# once

调用 `once(func)` 可以保证函数 `func` 只被执行一次

内部实现是调用 `_.before(2, func)`, 之后 `func` 函数被设置为 `undefined`, 因此也就仅会执行一次