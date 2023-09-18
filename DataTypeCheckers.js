
function isNumberStrict(num) {
    const check = num && typeof num.valueOf === 'function' ? num.valueOf() : num;
    return typeof check === 'number' && Number.isFinite(check);
}

function isString(str) {
    return typeof str === "string"
}

function isBoolean(bool) {
    return typeof bool === "boolean"
}


module.exports = { isNumberStrict, isBoolean, isString }
