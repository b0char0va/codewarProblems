// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
// which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
    var depth=0;
    return multiply(num, depth);
}

function multiply(num,depth) {
    var str = num.toString();
    var length = str.length;

    if (length === 1) {
        return depth;
    }
    num = 1;
    for (var i = 0; i < str.length; i++) {
        num *= str[i];
    }
    depth++;
    return multiply(num, depth);
}

console.log(persistence(25));