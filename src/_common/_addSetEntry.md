# addSetEntry

用法 `addSetEntry(set, value)`, 给 `set` 添加键值对 `pair`

其实就是包装下 `set.add(value)`

注：在 IE11 中直接返回 `set.add` 无法实现链式调用。
