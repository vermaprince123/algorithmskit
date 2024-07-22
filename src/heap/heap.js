/**
 * Class representing a heap (priority queue).
 * By default, it behaves as a min-heap (decreasing order).
 */
class Heap {
    /**
     * Creates an instance of Heap.
     * @param {boolean} [isIncreasing=false] - If true, the heap is a max-heap (increasing order).
     */
    constructor(isIncreasing = false) {
        /**
         * The array representing the heap.
         * @type {number[]}
         */
        this.heap = [];

        /**
         * Flag indicating if the heap is increasing (max-heap) or decreasing (min-heap).
         * @type {boolean}
         */
        this.isIncreasing = isIncreasing;
    }

    /**
     * Compares two values based on the heap type.
     * @param {number} a - The first value.
     * @param {number} b - The second value.
     * @returns {boolean} - True if the comparison condition is met, false otherwise.
     */
    compare(a, b) {
        return this.isIncreasing ? a > b : a < b;
    }

    /**
     * Swaps two elements in the heap.
     * @param {number} i - The index of the first element.
     * @param {number} j - The index of the second element.
     */
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    /**
     * Pushes a value onto the heap.
     * @param {number} value - The value to be pushed onto the heap.
     */
    push(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    /**
     * Pops the top value from the heap.
     * @returns {number} - The value popped from the top of the heap, or null if the heap is empty.
     */
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return root;
    }

    /**
     * Peeks at the top value of the heap without removing it.
     * @returns {number} - The value at the top of the heap, or null if the heap is empty.
     */
    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    /**
     * Bubbles up an element to maintain heap property.
     * @param {number} index - The index of the element to bubble up.
     */
    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.compare(this.heap[index], this.heap[parentIndex])) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    /**
     * Bubbles down an element to maintain heap property.
     * @param {number} index - The index of the element to bubble down.
     */
    bubbleDown(index) {
        const lastIndex = this.heap.length - 1;
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let swapIndex = index;

            if (
                leftChildIndex <= lastIndex &&
                this.compare(this.heap[leftChildIndex], this.heap[swapIndex])
            ) {
                swapIndex = leftChildIndex;
            }

            if (
                rightChildIndex <= lastIndex &&
                this.compare(this.heap[rightChildIndex], this.heap[swapIndex])
            ) {
                swapIndex = rightChildIndex;
            }

            if (swapIndex !== index) {
                this.swap(index, swapIndex);
                index = swapIndex;
            } else {
                break;
            }
        }
    }
}

module.exports = Heap;
