# isIterateeCall

检查给定的参数 `(value, index, object)` 是否符合迭代调用的格式: `object[index] === value`

1. 参数检查, `object` 不是对象则返回 `false`
2. 当满足下面条件之一时, 比较 `object[index]` 和 `value` 的值(全等比较)
  - `index` 是数字时, 且 `object` 是类数组对象, 且 `index` 是有效的索引
  - `index` 是字符串时, 且 `index in object`
