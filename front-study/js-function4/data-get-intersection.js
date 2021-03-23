/**
 * JS数据求交集
 * @param array1
 * @param array2
 * @returns {*}
 */
function intersection(array1, array2) {
    return array1.filter(function (n) {
        return array2.indexOf(n) != -1;
    });
}
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
console.log(intersection(arr1, arr2)); // [3,4,5]