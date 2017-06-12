# _addMapEntry

用法 `addMapEntry(map, pair)`, 给 `map` 添加键值对 `pair`

其实就是包装下 `map.set(pair[0], pair[1])`

注：在 IE11 中直接返回 `map.set` 无法实现链式调用。