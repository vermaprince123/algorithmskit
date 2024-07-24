import checkNumber from "../utils/typeCheckingFunctions";
import  { DoublyLinkedList } from "../linkedlist";

/**
 * Class representing a Deque (Double-ended Queue) data structure.
 */
export class Deque {
    /**
     * Create a Deque.
     */
    constructor() {
        /** @private */
        this.list = new DoublyLinkedList();
        /** @private */
        this.size = 0;
        /** @private */
        this.capacity = 10000;
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
     * Add a value to the front of the deque.
     * @param {number} value - The value to add.
     */
    addFront(value) {
        this._checkInputType(value);
        if(this.size === this.capacity){
            console.log("Deque Full!");
            return;
        }
        this.list.addFirst(value);
        this.size++;
    }

    /**
     * Add a value to the rear of the deque.
     * @param {number} value - The value to add.
     */
    addRear(value) {
        this._checkInputType(value);
        if(this.size === this.capacity){
            console.log("Deque Full!");
            return;
        }
        this.list.addLast(value);
        this.size++;
    }

    /**
     * Remove and return the value from the front of the deque.
     * @returns {number|null} The value removed, or null if the deque is empty.
     */
    removeFront() {
        if (this.size === 0) {
            console.log("Deque is empty!");
            return null;
        }
        const value = this.list.returnFirst();
        this.list.deleteFirst();
        this.size--;
        return value;
    }

    /**
     * Remove and return the value from the rear of the deque.
     * @returns {number|null} The value removed, or null if the deque is empty.
     */
    removeRear() {
        if (this.size === 0) {
            console.log("Deque is empty!");
            return null;
        }
        const value = this.list.returnLast();
        this.list.deleteLast();
        this.size--;
        return value;
    }

    /**
     * Peek at the value at the front of the deque without removing it.
     * @returns {number|null} The value at the front, or null if the deque is empty.
     */
    peekFront() {
        if (this.size === 0) {
            console.log("Deque is empty!");
            return null;
        }
        return this.list.returnFirst();
    }

    /**
     * Peek at the value at the rear of the deque without removing it.
     * @returns {number|null} The value at the rear, or null if the deque is empty.
     */
    peekRear() {
        if (this.size === 0) {
            console.log("Deque is empty!");
            return null;
        }
        return this.list.returnLast();
    }

    /**
     * Check if the deque is empty.
     * @returns {boolean} True if the deque is empty, false otherwise.
     */
    isEmpty() {
        return this.size === 0;
    }

    /**
     * Get the number of elements in the deque.
     * @returns {number} The size of the deque.
     */
    getSize() {
        return this.size;
    }

    /**
     * Print the elements of the deque.
     */
    printDeque() {
        let curr = this.list.head;
        const elements = [];
        while (curr) {
            elements.push(curr.value);
            curr = curr.next;
        }
        console.log("Deque:", elements.join(" -> "));
    }
}