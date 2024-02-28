const repeatString = function(str, numb){
    if(numb < 0) {
        return "ERROR";
    } 
    let repeatedString = "";
    for(i = 0; i < numb; i++) {
        repeatedString += str;
    }
    return repeatedString;
}

// Do not edit below this line
module.exports = repeatString;
