const palindromes = function (string) {
    
    let reverseString = '';
    string = string.replace(/[^a-zA-Z]/g, '').toLowerCase();
    
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString = reverseString.concat(string[i]);
    }
    return string === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
