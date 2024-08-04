const removeFromArray = function(originalArray, ...valuesForRemoval) {
    console.log(`valuesForRemoval: ${valuesForRemoval}`)
    const removalArray = Array.isArray(valuesForRemoval) ? valuesForRemoval : [valuesForRemoval];
    const removalSet = new Set(removalArray);
    return originalArray.filter(item => !removalSet.has(item));
};

// Do not edit below this line
module.exports = removeFromArray;
