# baseIndexOf

调用 `baseIndexOf(array, value, fromIndex)`

根据其中的 `value === value` 的结果来区分不同情况

1. `true` 时就进行正常的全等 `===` 比较查找
2. `false` 时就看看是否是 `NaN`, 是 `NaN` 也是有效的
