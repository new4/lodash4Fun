# isArguments

实现:

1. 检查环境中是否有 `arguments` 参数对象
2. 如果有, 检查标签 `[object Arguments]`
3. 如果没有, 检查当前对象有属性 `callee`, 且属性 `callee` 不可以通过 `for-in` 来枚举
