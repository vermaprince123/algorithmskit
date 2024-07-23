const { checkNumber } = require("../utils/typeCheckingFunctions");
const { SinglyLinkedList } = require("../linkedlist");

/**
 * Class representing a Queue data structure.
 */
class Queue {
    /**
     * Create a Queue.
     */
    constructor() {
        /**
         * The internal linked list to store queue elements.
         * @type {SinglyLinkedList}
         */
        this.list = new SinglyLinkedList();

        /**
         * The size of the queue.
         * @type {number}
         */
        this.size = 0;
    }

    _checkInputType(value) {
        try {
            checkNumber(value);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Adds an element to the end of the queue.
     * @param {number} value - The value to add to the queue.
     * @throws Will throw an error if the input type is incorrect.
     */
    enqueue(value) {
        this._checkInputType(value);
        this.list.addLast(value);
        this.size++;
    }

    /**
     * Removes and returns the first element from the queue.
     * @returns {number|null} The value removed from the front of the queue, or null if the queue is empty.
     */
    dequeue() {
        if (this.size === 0) {
            console.log("Queue is empty!");
            return null;
        }

        const value = this.list.returnFirst();
        this.list.deleteFirst();
        this.size--;
        return value;
    }

    /**
     * Returns the first element of the queue without removing it.
     * @returns {number|null} The value at the front of the queue, or null if the queue is empty.
     */
    peek() {
        if (this.size === 0) {
            console.log("Queue is empty!");
            return null;
        }

        return this.list.returnFirst();
    }

    /**
     * Checks if the queue is empty.
     * @returns {boolean} True if the queue is empty, otherwise false.
     */
    isEmpty() {
        return this.size === 0;
    }

    /**
     * Returns the size of the queue.
     * @returns {number} The number of elements in the queue.
     */
    getSize() {
        return this.size;
    }

    /**
     * Prints the elements of the queue.
     */
    printQueue() {
        let curr = this.list.head;
        const elements = [];

        while (curr) {
            elements.push(curr.value);
            curr = curr.next;
        }

        console.log("Queue:", elements.join(" -> "));
    }
}

module.exports = Queue;
