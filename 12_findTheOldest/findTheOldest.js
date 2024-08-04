const deductArrays = function(arr1, arr2) {
    // Ensure both arrays are of the same length to avoid index out of range
    const length = Math.min(arr1.length, arr2.length);
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(arr1[i] - arr2[i]);
    }
    return result;
};

const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    
    // Map to get yearsOfBirth and yearsOfDeath
    let yearsOfBirth = people.map(person => person.yearOfBirth);
    let yearsOfDeath = people.map(person => person.yearOfDeath || currentYear);

    console.log(yearsOfBirth);
    console.log(yearsOfDeath);

    // Calculate ages
    let ageDiffArray = deductArrays(yearsOfDeath, yearsOfBirth);
    console.log(ageDiffArray);

    // Find the oldest age
    let oldestAge = Math.max(...ageDiffArray);
    console.log(oldestAge);

    // Find the index of the oldest person
    let oldestIndex = ageDiffArray.indexOf(oldestAge);
    
    // Return the whole person object for the oldest person
    return people[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
