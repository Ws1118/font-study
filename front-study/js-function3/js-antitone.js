/**
 * JS字符串反序
 * @param text 需要进⾏反序的字符串
 * @returns {string} 返回反序之后的字符串
 * @constructor
 */
function reverseStr(text) {
    return text.split('').reverse().join('');
}
console.log(reverseStr("Hello!")); // !olleH