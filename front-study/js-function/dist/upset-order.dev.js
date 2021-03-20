"use strict";

/**
 * JS打乱数组
 * @param {array} arrOld 数组
 * @param num
 * @returns {Array} 返回数组
 */
function upsetOrder(arrOld, num) {
  var result = [],
      _length = num || arrOld.length,
      arr;

  arr = Object.assign([], arrOld);

  for (var i = 0, len = arr.length; i < len; i++) {
    result.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
  }

  return result;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(upsetOrder(arr));