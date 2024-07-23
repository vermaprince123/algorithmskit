const { checkNumber } = require('../utils/typeCheckingFunctions');
const Stack = require("./stack"); 
/**
 * Class representing a Monotonic Stack.
 * A Monotonic Stack is a stack where the elements are in increasing or decreasing order.
 * It extends the Stack class.
 */
class MonotonicStack extends Stack {
    /**
     * Creates an instance of MonotonicStack.
     * @param {boolean} [isIncreasing=true] - If true, the stack is monotonic increasing; otherwise, it is monotonic decreasing.
     */
    constructor(isIncreasing = true) {
        super();
        /**
         * Determines if the stack is increasing or decreasing.
         * @type {boolean}
         */
        this.isIncreasing = isIncreasing;

        /**
         * Specific capacity for MonotonicStack.
         * @type {number}
         */
        this.capacity = 1000;
    }

    _checkInputType(value){
        try{
            checkNumber(value);
        }
        catch(error){
            throw error;
        }
    }

    /**
     * Pushes a key into the MonotonicStack. Ensures the stack remains monotonic.
     * @param {number} key - The key to be pushed into the stack.
     * @returns {number} - The key at the top of the stack after the push operation.
     */
    push(key) {
        this._checkInputType(key);
        if (this.isIncreasing) {
            while (this.peek() !== -1 && this.peek() >= key) {
                this.pop();
            }
        } else {
            while (this.peek() !== -1 && this.peek() <= key) {
                this.pop();
            }
        }

        const topKey = this.peek();

        super.push(key);

        return topKey;
    }
}

module.exports = MonotonicStack;
