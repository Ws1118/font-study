"use strict";

/**
 * JS检测字符串是否为空
 * @param str
 * @returns {boolean}
 */
function checkIsEmpty(str) {
  if (null != str && undefined != str && "" != str) {
    return false;
  }

  return true;
}

console.log(checkIsEmpty("")); // true