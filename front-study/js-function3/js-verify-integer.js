/**
 * JS验证是否为正整数
 * @param str
 * @returns
 */
function checkNumber(str) {
    return /^[1-9]\d*$/.test(str);
}
console.log(checkNumber(100)) //true
console.log(checkNumber(-100)) //false