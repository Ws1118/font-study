/**
 * 将数值四舍五⼊到保留的⼩数位数
 * @param num 待四舍五⼊数值
 * @param len 保留⼩数位数
 * @returns {number}
 */
function getRound(num, len) {
    return Math.round(num * Math.pow(10, len)) / Math.pow(10, len);
}
getRound(6.123456, 4); // 6.1235
console.log(getRound(6.123456, 4))
