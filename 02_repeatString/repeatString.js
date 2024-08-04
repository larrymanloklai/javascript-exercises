const repeatString = function(stringToRepeat, numOfTimes) {
    let stringResult = '';
    for (let i = 0; i < numOfTimes; i++) {
        stringResult = stringResult.concat(stringToRepeat);
    }
    return stringResult;
};

// Do not edit below this line
module.exports = repeatString;
