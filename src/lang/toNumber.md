# toNumber

转换 `value` 的步骤：

1. 先用 `typeof` 操作符来检测, 是 `number` 就说明是一个数值, 直接返回它
2. 对于 `Symbol` 类型的值直接返回 `NaN`
3. 对于对象, 如果该对象有一个名为 `valueOf` 的函数方法, 则取 `value.valueOf()` 作为新值；否则转换成字符串作为新值
4. 对新值不是字符串的情况, 转换下返回
5. 对新值是字符串的情况（多种进制字符串形式, 如"-0xf", "+0xf"）, 判断是否是 二/八/十六 进制的字符串

```js
console.log(_.toNumber("+0xf")) // NaN
console.log(_.toNumber("-0xf")) // NaN
console.log(_.toNumber(+0xf)) // +15
console.log(_.toNumber(-0xf)) // -15
console.log(typeof +0xf) // number
console.log(typeof -0xf) // number
console.log(Number(+0xf)) // 15
console.log(Number(-0xf)) // -15
```

自带的 `Number()` 函数的转换规则如下。
- 如果是 Boolean 值, true 和 false 将分别被转换为 1 和 0
- 如果是数字值, 只是简单的传入和返回
- 如果是 null 值, 返回 0
- 如果是 undefined, 返回 NaN
- 如果是字符串, 遵循下列规则:
  - 如果字符串中只包含数字（包括前面带正号或负号的情况）, 则将其转换为十进制数值, 即 "1" 会变成 1, "123" 会变成 123, 而 "011" 会变成 11（前导的零被忽略了）
  - 如果字符串中包含有效的浮点格式, 如 "1.1", 则将其转换为对应的浮点数值（也会忽略前导零）
  - 如果字符串中包含有效的十六进制格式, 例如 "0xf", 则将其转换为相同大小的十进制整数值
  - 如果字符串是空的（不包含任何字符）, 则将其转换为0
  - 如果字符串中包含除上述格式之外的字符, 则将其转换为NaN
- 如果是对象, 则调用对象的 valueOf() 方法, 然后依照前面的规则转换返回的值。如果转换的结果是NaN, 则调用对象的toString()方法, 然后再次依照前面的规则转换返回的字符串值
