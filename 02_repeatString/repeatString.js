const repeatString = function (str, numb) {
    if (numb < 0) {
        return 'ERROR';
    }
    let repString = "";
    for (i = 0; i < numb; i++) {
        repString += str;
    }
    return repString;
}

// Do not edit below this line
module.exports = repeatString;
