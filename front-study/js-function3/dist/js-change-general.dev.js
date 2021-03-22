"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * JS将数字转换成字符串的通⽤⽅法
 * 说明:直接使⽤ toFixed ⽅法会进⾏四舍五⼊，因此写⼀个将数字转换为
指定⼩数位数字符串的⽅法
 * @param sourceData 源数据
 * @param decimalLen ⼩数的位数
 */
function numberToString(sourceData, decimalLen) {
  decimalLen = _typeof(decimalLen) == undefined ? 0 : decimalLen;
  var result = sourceData + "";
  var integerStr = null; // 整数部分

  var decimalStr = null; // ⼩数部分

  if (result.indexOf(".") == -1) {
    result = Number(result).toFixed(decimalLen);
  } else {
    integerStr = result.substring(0, result.indexOf(".")); // 整数部分

    decimalStr = /\.\d+/.exec(result); // ⼩数部分

    decimalStr = Number(decimalStr);
    decimalStr = decimalStr.toPrecision(decimalLen).substr(0, decimalLen + 2);
    result = integerStr + decimalStr.substr(1);
  }

  return result;
}

console.log(numberToString(233, 2)); // 233.00