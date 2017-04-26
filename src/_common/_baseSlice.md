# _baseSlice

函数调用 `baseSlice(array, start, end)`

实现方式：

1. 参数修正，目的是获取开始拷贝的位置 `start` 和拷贝的数据数目 `length`

  - 修正 start 参数，主要针对 start 参数为负的情况:
    - start 绝对值大于数组长度, start 修正为 0;
    - 否则, 修正为 array.length + start
  - 修正 end 参数:
    - end 大于 array.length , 修正其为 array.length
    - end 为负数, 修正为 length + array.length
  - 针对 start 和 end 的大小比较进行参数修正, 主要是得出需拷贝的数组项的数目 length
    - start > end, 拷贝 0 个
    - start <= end, 拷贝 end - start 个

2. 执行拷贝, 从 start 的位置开始拷贝 length 个数据到新的数组中并返回
