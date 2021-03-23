"use strict";

/**
 * JS适配rem
 */
function getFontSize() {
  var doc = document,
      win = window;

  var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      reCalc = function reCalc() {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return; //如果屏幕⼤于750（750是根据效果图设置的），就设置clientWidth=750，防⽌font-size会超过100px

    if (clientWidth > 750) {
      clientWidth = 750;
    } //设置根元素font-size⼤⼩


    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
  }; //屏幕⼤⼩改变，或者横竖屏切换时，触发函数


  win.addEventListener(resizeEvt, reCalc, false); //⽂档加载完成时，触发函数

  doc.addEventListener('DOMContentLoaded', reCalc, false);
}