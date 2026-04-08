const factorial = function(n) {
    if (n === 0) return 1;
    else if (!Number(n) || n < 0 || !Number.isInteger(n)) {
        return undefined;
    } else {
        return n * factorial(n - 1);
    }
};

// Do not edit below this line
module.exports = factorial;