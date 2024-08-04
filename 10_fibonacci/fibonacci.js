const fibonacci = function(num) {
    num = Number(num);
    if(num<0) return "OOPS";
    if(num===0) return 0;
    if(num===1) return 1;
    if(num===2) return 1;

    const fibArray = [0,1];
    for (let i=2; i<num+1; i++) {
        fibArray.push(fibArray[i-1]+fibArray[i-2]);
    }
    return fibArray[num];
};

// Do not edit below this line
module.exports = fibonacci;
