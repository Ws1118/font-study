/**
 * JS将驼峰字符串转为下划线字符串
 * @param str
 * @returns {*}
 */
function convertCamelCase(str) {
    if (typeof (str) != 'string') {
        console.error('[convertCamelCase] argument is not String.');
        return str;
    }
    var pattern = /[A-Z]/g;
    return str.replace(pattern, function (match, index) {
        if (index != 0) {
            return '_' + match.toLowerCase();
        } else {
            return match.toLowerCase();
        }
    });
}
console.log(convertCamelCase("HelloWorld")); //hello_wolrd