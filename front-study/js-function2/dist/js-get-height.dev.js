"use strict";

/**
 * 获取⻚⾯⾼度
 * @returns {number} 返回对应⾼度数值
 */
function getPageHeight() {
  var g = document,
      a = g.body,
      f = g.documentElement,
      d = g.compatMode == "BackCompat" ? a : g.documentElement;
  return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
}

console.log(getPageHeight());