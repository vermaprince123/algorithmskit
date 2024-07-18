const Stack = require('./stack');
class MonotonicStack extends Stack {
    constructor(isIncreasing = true) {
        super();
        this.isIncreasing = isIncreasing;
        this.capacity = 1000; // MonotonicStack specific capacity
    }

    push(key) {
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
