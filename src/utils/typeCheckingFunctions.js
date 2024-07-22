/**
 * Checks if the input is an array of numbers.
 * @param {any} input - The input to be checked.
 * @throws Will throw an error if the input is not an array of numbers.
 */
function checkNumberArray(input) {
    if (!Array.isArray(input)) {
        throw new Error("Input is not an array");
    }
    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] !== 'number') {
            throw new Error("Array contains non-number elements");
        }
    }
}

/**
 * Checks if the input is an array of numbers.
 * @param {any} input - The input to be checked.
 * @throws Will throw an error if the input is not an array of numbers.
 */
function checkNumber(input) {
    if(typeof input !== 'number') throw new Error("Input is not a number");
}

module.exports = {checkNumberArray, checkNumber};

