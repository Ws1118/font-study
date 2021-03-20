"use strict";

/**
 * 字符串⻓度截取
 * @param str 给定的字符串
 * @param len 给定的⻓度
 * @returns {string} 返回截取之后的字符串
 */
function cutStr(str, len) {
  var temp,
      count = 0,
      pattern = /[^\x00-\xff]/,
      result = '';

  for (var i = 0; i < str.length; i++) {
    if (count < len - 1) {
      temp = str.substr(i, 1);

      if (pattern.exec(temp) == null) {
        count = count + 1;
      } else {
        count = count + 2;
      }

      result += temp;
    } else {
      break;
    }
  }

  return result + '...';
}

var str = 'fhasjdhklsajhfnolsai';
console.log(cutStr(str, 8)); //fhasjdh...