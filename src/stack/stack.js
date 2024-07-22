const { checkNumber } = require("../utils/typeCheckingFunctions");
const SinglyLinkedList = require("../linkedlist/singlylinkedlist");

/**
 * Class representing a Stack.
 * A stack is a data structure that follows the Last In First Out (LIFO) principle.
 */
class Stack {
    /**
     * Creates an instance of Stack.
     */
    constructor() {
        /**
         * The maximum capacity of the stack.
         * @type {number}
         */
        this.capacity = 10000;

        /**
         * The singly linked list used to store stack elements.
         * @type {SinglyLinkedList}
         */
        this.stackList = new SinglyLinkedList(-1);

        /**
         * The current size of the stack.
         * @type {number}
         */
        this.size = 0;
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
     * Pushes a value onto the stack.
     * @param {number} value - The value to be pushed onto the stack.
     */
    push(value) {
        this._checkInputType(value);
        if (this.size === this.capacity) {
            console.log("Stack Full!");
            return;
        }

        this.stackList.addFirst(value);
        this.size++;
    }

    /**
     * Pops the top value from the stack.
     * @returns {number} - The value popped from the top of the stack, or -1 if the stack is empty.
     */
    pop() {
        if (this.size === 0) {
            console.log("Stack Empty. Nothing to pop");
            return -1;  // Indicating the stack is empty
        }

        let topValue = this.stackList.returnFirst();
        this.stackList.deleteFirst();
        this.size--;
        return topValue;
    }

    /**
     * Peeks at the top value of the stack without removing it.
     * @returns {number} - The value at the top of the stack, or -1 if the stack is empty.
     */
    peek() {
        if (this.size === 0) {
            console.log("No elements inside Stack");
            return -1;  // Indicating the stack is empty
        }

        return this.stackList.returnFirst();
    }
}

module.exports = Stack;
