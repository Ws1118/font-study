"use strict";

/**
 * JS判断是否是中⽂名
 * @param value
 * @returns {boolean}
 */
function isChinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/i;

  if (!reg.test(value)) {
    // 不是中⽂名
    return false;
  } // 是中⽂名


  return true;
}

console.log(isChinese("厉害")); // true