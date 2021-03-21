"use strict";

/**
 * JS随机数时间戳
 * @returns {string}
 */
function uniqueId() {
  var a = Math.random,
      b = parseInt;
  return Number(new Date()).toString() + b(10 * a()) + b(10 * a()) + b(10 * a());
}

console.log(uniqueId()); // 例如：1525075670818519