/**
 * JS限制只能是整数，不能是⼩数
 * @param curObj
 */
function clearNoInt(curObj) {
    curObj.value = curObj.value.replace(/[^\d]/g, ""); //清除“数字”和“.”以外的字符
}