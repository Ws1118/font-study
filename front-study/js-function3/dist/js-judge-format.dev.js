"use strict";

/**
 * 判断是否是邮箱的正确格式
 * @param str 对应的需要验证的邮箱地址
 * @returns {boolean} 返回真或假
 */
function isEmail(str) {
  var reg = /^([a-z0-9A-Z]+[-|\.]?)+[a-z0-9A-Z]@([a-z0-9AZ]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$/;
  return reg.test(str);
}

console.log(isEmail("ye21st@gmail.com")); //true

console.log(isEmail("ye21st!gmail.com")); //false