# isIndex

调用 `isIndex(value, length)` 检测 `value` 是否是有效的索引

1. 修正 `length`, 没定义就默认为最大可接受的整数
2. `typeof value` 的结果是 `number` 或者是数字/数字字符串
3. 非负数 `value > -1`; 整数 `value % 1 == 0`; 小于 `length`
