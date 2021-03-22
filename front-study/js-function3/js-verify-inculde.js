/**
 * JS判断是否包含全⻆
 * @param str
 */
function checkHasFull(str) {
    for (var i = 0; i < str.length; i++) {
        strCode = str.charCodeAt(i);
        if ((strCode > 65248) || (strCode == 12288)) {
            return true;
            break;
        }
    }
    return false;
}
console.log(checkHasFull("AaBb1234@#%&；，．：")) //true
console.log(checkHasFull("AaBb1234@#%&;,.:")) //false