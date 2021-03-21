/**
 * JS判断是否为⽹址，可⾃⾏修改扩展
 * @param strUrl URL地址
 * @returns {boolean} 返回真或者假
 * @constructor
 */
function isURL (strUrl) {
    var regular = /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i
    if (regular.test(strUrl)) {
        return true
    } else {
        return false
    }
}
console.log(isURL("https://www.baidu.com")) //true
console.log(isURL("https://github.com/Ws1118"))//true
console.log(isURL("http://www.baidu.con")) //false