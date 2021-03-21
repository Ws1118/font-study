"use strict";

/**
* 设置cookie值
* setCookie(键，值，保存时长（毫秒))
* @param name cookie对应名字
* @param value 该cookie对应的值
* @param Hours
*/
function setCookie(name, value, expire) {
  var date = new Date();
  date.setTime(Number(date) + expire);
  document.cookie = name + "=" + escape(value) + (expire == null ? "" : ";expires=" + date.toGMTString());
}
/**
* JS 获取 Cookie
* @param name cookie对应名字
* @returns {string}
*/


function getCookie(name) {
  if (document.cookie.length > 0) {
    start = document.cookie.indexOf(name + "="); //获取字符串的起点

    if (start != -1) {
      start = start + name.length + 1; //获取值的起点

      end = document.cookie.indexOf("; ", start); //获取结尾处

      if (end == -1) end = document.cookie.length; //如果是最后一个，结尾就是cookie字符串的结尾

      return decodeURI(document.cookie.substring(start, end)); //截取字符串返回
    }
  }

  return "";
}