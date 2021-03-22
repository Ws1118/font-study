/**
 * JS检查输⼊的⼀串字符是否全部是数字或者英⽂
 * @param str 字符串
 * @returns true 或 false; true表示为数字或者英⽂
 */
function checkEnNum(str) {
    for (var i = 0; i < str.length; i++) {
        var strTmp = str.charAt(i);
        if (!(/[A-Za-z0-9]/.test(strTmp))) {
            return false;
        }
    }
    return true;
}
console.log(checkEnNum("dasdasdas")) //true
console.log(checkEnNum("dasdasdas13615!")) //false