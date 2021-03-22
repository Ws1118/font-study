/**
 * JS将⼿机号格式化，中间部分以 * 号代替
 * @param phone
 * @returns {string | * | void}
 */
function phoneToStar(phone) {
    return phone.replace(/(\d{3})\d{4}(\d{4})/,
        "$1****$2");
}
console.log(phoneToStar('13951905171')) // 139****5171