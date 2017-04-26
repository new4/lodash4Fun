# chunk

调用 `chunk(array, size)` 将数组 `array` 分组, 每组 `size` 个元素, 所有组会组成一个新的数组返回

实现：

1. 参数异常处理
2. 分割拷贝, 每 `size` 个分割复制(`baseSlice` 方法)

注：源码中 `chunk` 有第三个参数 `guard` 是为了处理函数 `chunk` 被用作迭代器函数的情况的，例如 `_.map([1, 2, 3], _.chunk)`
