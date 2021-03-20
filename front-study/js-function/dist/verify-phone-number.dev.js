"use strict";

/**
 * @param str 对应⼿机号码
 * @returns {boolean} 结果返回 true 和 false。
 * true 为正确⼿机号码
 * false 为错误⼿机号码
 */
function verifyPhoneNumber(str) {
  var phoneReg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  return phoneReg.test(str);
}

console.log(verifyPhoneNumber("18818592555"));