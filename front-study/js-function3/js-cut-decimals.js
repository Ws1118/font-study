/**
 * 切割相应⼩数点后位数，并将⼩数点后多余的0 清空
 * @param val 需要切割的数值
 * @param num 需要的⼩数位数
 * @returns {string}
 */
function cutRoundNum(val, num) {
    let value = val.toString()
    value = value.substr(0, value.indexOf('.') + 1) +
        value.substr(value.indexOf('.') + 1, num)
    let reg = value.match(/\d+\.\d+/g)
    for (let index in reg) {
        value = value.replace(reg[index],
            parseFloat(reg[index]))
    }
    return value
}
cutRoundNum(2.333000, 4); // 2.333
console.log(cutRoundNum(2.333000, 4))
