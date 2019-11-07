function isRequestValid(value1, value2) {
    if (value1 === undefined) {
        return 'value1 is undefined';
    }
    else if (isNaN(value1)) {
        return 'value1 is not a number';
    }
    else if (!Number.isSafeInteger(value1)) {
        return 'value1 is not a safe integer.  Enter a value between -(2^53 - 1) and 2^53 - 1.';
    }
    else if (value2 === undefined) {
        return 'value2 is undefined';
    }
    else if (isNaN(value2)) {
        return 'value2 is not a number';
    }
    else if (!Number.isSafeInteger(value2)) {
        return 'value2 is not a safe integer.  Enter a value between -(2^53 - 1) and 2^53 - 1.';
    }
    return null;
}

module.exports = isRequestValid;
