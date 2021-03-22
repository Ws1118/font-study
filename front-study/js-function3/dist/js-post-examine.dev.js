"use strict";

/**
 * JS检查输⼊的邮政编码是否正确
 * @param str
 * @returns {Boolean}
 */
function checkPostcode(str) {
  if (str.match(/^[1-9][0-9]{5}$/) == null) {
    return false;
  } else {
    return true;
  }
}

console.log(checkPostcode("423000")); //true

console.log(checkPostcode("029000")); //false