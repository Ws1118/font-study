/**
 * BASE64加密
 * @param str
 * @returns {string}
 */
function base64Encode(str) {
    return btoa(unescape(encodeURIComponent(str)));
}
/**
 * BASE64解密
 * @param str
 * @returns {string}
 */
function base64Decode(str) {
    return decodeURIComponent(escape(atob(str)));
}
console.log(base64Encode("test")); // dGVzdA==
console.log(base64Decode("dGVzdA==")); // test