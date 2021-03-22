/**
 * JS 将object转为form data，⽅便post提交
 * @param {Object} obj [数据对象]
 * @return {String}
 */
function encodeFormData(obj) {
    if (!obj) return
    let pairs = []
    for (let name in obj) {
        if (!obj.hasOwnProperty(name)) continue
        if (typeof obj[name] == 'function') continue
        var value = obj[name].toString()
        name = encodeURIComponent(name.replace('%20', '+'))
        value = encodeURIComponent(value.replace('%20', '+'))
        pairs.push(name + '=' + value)
    }
    return pairs.join('&')
}
console.log(encodeFormData({ id: 1, name: 'hello' })) //id=1&name=hello