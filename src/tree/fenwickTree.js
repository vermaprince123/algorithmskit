const { checkNumber, checkNumberArray } = require("../utils/typeCheckingFunctions");

/**
 * Class representing a Fenwick Tree (Binary Indexed Tree).
 */
class FenwickTree {
    /**
     * Create a Fenwick Tree.
     * @param {number} size - The size of the tree.
     */
    constructor(size) {
        /**
         * The size of the Fenwick Tree.
         * @type {number}
         */
        this.size = size;

        /**
         * The internal array representing the Fenwick Tree.
         * @type {number[]}
         */
        this.bit = new Array(size + 1).fill(0);
    }

    _checkInputType(value, variableName) {
        try {
            checkNumber(value);
        } catch (error) {
            throw new Error(`Wrong input type passed for ${variableName}. Expected a number`);
        }
    }

    /**
     * Builds the Fenwick Tree from the given array.
     * @param {number[]} arr - The array to build the tree from.
     * @throws Will throw an error if the input is not a number array.
     */
    build(arr) {
        checkNumberArray(arr);
        for (let i = 0; i < this.size; i++) {
            this.update(i+1, arr[i]);
        }
    }

    /**
     * Updates the Fenwick Tree with the given value at the specified index.
     * @param {number} i - The index to update.
     * @param {number} x - The value to add.
     * @throws Will throw an error if the input types are incorrect.
     */
    update(i, x) {
        const delta = x - this.bit[i];
        this._checkInputType(i, "Index");
        this._checkInputType(x, "Update Value");
        for (; i <= this.size; i += i & -i) {
            this.bit[i] += delta;
        }
    }

    /**
     * Queries the prefix sum from index 1 to the specified index.
     * @param {number} i - The index to query to.
     * @returns {number} The prefix sum.
     * @throws Will throw an error if the input type is incorrect.
     */
    query(i) {
        this._checkInputType(i, "Index");
        let sum = 0;
        for (; i > 0; i -= i & -i) {
            sum += this.bit[i];
        }
        return sum;
    }

    /**
     * Queries the range sum from index l to index r.
     * @param {number} l - The left index of the range.
     * @param {number} r - The right index of the range.
     * @returns {number} The range sum.
     * @throws Will throw an error if the input types are incorrect.
     */
    rangeQuery(l, r) {
        this._checkInputType(l, "Left Index");
        this._checkInputType(r, "Right Index");
        return this.query(r) - this.query(l - 1);
    }
}

module.exports = FenwickTree;
