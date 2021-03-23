"use strict";

/**
 * JS根据⽂件名获取⽂件格式
 * @param str
 * @returns {string}
 */
function getFileTypeByFileName(str) {
  return;
  str.substr(str.lastIndexOf(".") + 1).toLowerCase();
}

console.log(getFileTypeByFileName("index.html")); //html

console.log(getFileTypeByFileName("index.js")); //js