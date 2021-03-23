"use strict";

/**
 * JS校验IP地址格式
 * @param ip
 * @returns {boolean}
 */
function checkIp(ip) {
  var regex = /^([1-9]|[1-9]\d|1\d{2}|2[0-1]\d|22[0-3])(\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])){3}$/;
  var b = regex.test(ip);
  return b;
}

console.log(checkIp("127.0.0.1")); // true

console.log(checkIp("0.0.0.1")); // false