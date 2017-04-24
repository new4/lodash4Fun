# toFinite

## 关于 `-0`

性质：

```js
console.log(-0); // -0
console.log(-1/Infinity); // -0
console.log(-0 === +0); // true
console.log((-0).toString()); // 0
console.log( (+0).toString()); // 0
console.log( -0 < +0 ); //false
console.log( +0 < -0 ); //false
```

判断：

```js
num === 0 && (1 / num < 0)
```

## 转换 `value` 方法：

1. 对通过 `!` 转换后为 `true` 值的进行处理

```js
console.log(!0); //true
console.log(!NaN); //true
console.log(!false); //true
console.log(!""); //true
console.log(!null); //true
console.log(!undefined); //true
```


2. 用 `_.toNumber` 转换 `value`, 判断是否是 `INFINITY` 或者 `-INFINITY`, 是的话用一个极大/小的有限值替代

3. 源码中的如下部分是为了区分 `-0`：

```js
return value === 0 ? value : 0;
```
