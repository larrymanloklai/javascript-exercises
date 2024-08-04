const sumAll = function(numberOne, numberTwo) {
    let result = 0;

    if (Math.min(numberOne, numberTwo)<0 || !Number.isInteger(numberOne) ||
    !Number.isInteger(numberTwo) || typeof numberOne !== 'number' ||
    typeof numberTwo !== 'number') {
        return "ERROR";
    } else {
        for (let i = Math.min(numberOne, numberTwo); i <= Math.max(numberOne, numberTwo); i++) {
            result = result + i;
        }
        console.log(`result: ${result}`)
        return result;
    }
};

// Do not edit below this line
module.exports = sumAll;
