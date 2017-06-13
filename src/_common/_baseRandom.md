# baseRandom

`Math.random()` 方法返回大于等于 0 小于 1 的一个随机数。

舍入方法：

- Math.ceil()：向上舍入
- Math.floor()：向下舍入
- Math.round()：标准舍入, 四舍五入

从某个整数范围内随机选择一个值, 公式:

> 值 = Math.floor(Math.random() * 可能值的总数 + 第一个可能的值)
