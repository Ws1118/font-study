/**
 * JS Url参数转对象
 * @param {String} url default: window.location.href
 * @return {Object}
 */
 function parseQueryString(url) {
    url = url == null ? window.location.href : url
    var search = url.substring(url.lastIndexOf('?') + 1)
    if (!search) {
    return {}
    }
    return JSON.parse('{"' +
   decodeURIComponent(search).replace(/"/g,
   '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
   }
   console.log(parseQueryString("http://www.baidu.com?id=1&name=hello")); // {id: "1", name: "hello"}