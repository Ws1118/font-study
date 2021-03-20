"use strict";

/**
 * JS格式化⾦额
 * @param money
 * @param type
 * @returns {*}
 */
function convertMoney(money, type) {
  if (/[^0-9\.]/.test(money)) return "0";
  if (money == null || money == "") return "0";
  money = money.toString().replace(/^(\d*)$/, "$1.");
  money = (money + "00").replace(/(\d*\.\d\d)\d*/, "$1");
  money = money.replace(".", ",");
  var re = /(\d)(\d{3},)/;

  while (re.test(money)) {
    money = money.replace(re, "$1,$2");
  }

  money = money.replace(/,(\d\d)$/, ".$1");

  if (type == 0) {
    // 不带⼩数位(默认是有⼩数位)
    var a = money.split(".");

    if (a[1] == "00") {
      money = a[0];
    }
  }

  return money;
}

console.log(convertMoney(311546161685)); // 311,546,161,685.00

console.log(convertMoney(311546161685, 0)); // 311,546,161,685