"use strict";

/**
 * 判断是否为数字类型
 * @param value 判断的值
 * @returns {boolean}
 */
function isDigit(value) {
  var pattern = /^[0-9]*$/;

  if (pattern.exec(value) == null || value == "") {
    return false;
  } else {
    return true;
  }
}

var str1 = "5s";
var str2 = 5;
console.log(isDigit(str1));
console.log(isDigit(str2));