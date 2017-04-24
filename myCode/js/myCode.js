console.log(!0);
console.log(!-0);
console.log(!(-1/Infinity));
console.log(!NaN);
console.log(!false);
console.log(!"");
console.log(!null);
console.log(!undefined);


console.log(_.toNumber(NaN));


console.log("----------------")
console.log(-0); // -0
console.log(-1/Infinity); // -0
console.log(-0 === +0); // true
console.log((-0).toString()); // 0
console.log( (+0).toString()); // 0
console.log( -0 < +0 ); //false
console.log( +0 < -0 ); //false

function isNegativeZero(num) {
    return num === 0 && (1 / num < 0);
}
console.log(isNegativeZero(-0)); // true
