/**
 * JS⽣成指定位数的随机整数
 * @param count
 * @returns {string}
 */
function getRandomNum(count) {
    let arr = new Array
    let reNum = ""
    for (let i = 0; i < count; i++) {
        arr[i] = parseInt(Math.random() * 10)
        reNum += String(arr[i])
    }
    return reNum
}
console.log(getRandomNum(6));