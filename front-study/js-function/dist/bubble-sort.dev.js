"use strict";

/**
 * 冒泡排序
 * @param array 数组
 * @returns {*}
 */
function bubbleSort(array) {
  var temp;

  for (var i = 0; i < array.length; i++) {
    //⽐较的趟数，从第⼀趟开始
    for (var j = 0; j < array.length - i - 1; j++) {
      //每⼀趟⽐较多少次数
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

var arr = [85, 24, 63, 17, 31, 17, 86, 50];
console.log(bubbleSort(arr));