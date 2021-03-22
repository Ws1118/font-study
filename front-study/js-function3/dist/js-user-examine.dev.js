"use strict";

/**
 * JS检查⽤户名是否满⾜要求，只能是英⽂或英⽂数字
 * @returns {*}
 */
function checkLoginName(loginName) {
  return /^[A-Za-z0-9]*$/.test(loginName) && !/(^\d*$)|(^\S+\s+\S+$)/.test(loginName);
}

console.log(checkLoginName("ye21st")); // true

console.log(checkLoginName("sam!")); // false