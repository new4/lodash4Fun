# toKey

将 `value` 转换成字符串的 `key`

- 值的类型是 `string` 或 `Symbol`, 直接返回
- 通过 `+""` 的方式转换成字符串
- 注意处理 `-0` 的情形