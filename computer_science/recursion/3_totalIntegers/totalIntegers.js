const totalIntegers = function (input, isNested = false) {

    if (!isNested) {
        const isCollection = Array.isArray(input) || (typeof input === 'object' && input !== null);
        if (!isCollection) return undefined;
    }

    if (Number.isInteger(input)) {
        return 1;
    }

    let result = 0;

    if (Array.isArray(input)) {
        for (let i = 0; i < input.length; i++) {
            // We pass 'true' for isNested so we don't hit the 'undefined' gate
            result += totalIntegers(input[i], true) || 0;
        }
    } else if (typeof input === "object" && input !== null) {
        const values = Object.values(input);
        for (let i = 0; i < values.length; i++) {
            result += totalIntegers(values[i], true) || 0;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = totalIntegers;
