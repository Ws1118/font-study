/**
 * JS判断是否为空
 * @param val
 * @returns {boolean}
 */
function isNull(val) {
    if (val == undefined || val == null || val == "" ||
        val == ''
        || val == "undefined" || val == "null" || val ==
        "NULL") {
        return true;
    }
    return false;
}
console.log(isNull(undefined)) // true
console.log(isNull(null)) // true
console.log(isNull("")) // true
console.log(isNull('')) // true
console.log(isNull("undefined")) // true
console.log(isNull("null")) // true
console.log(isNull("NULL")) // true