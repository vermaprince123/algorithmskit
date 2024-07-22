const LinkedListNode = require("./linkedlistnode");

/**
 * Class representing a singly linked list.
 */
class SinglyLinkedList {
    /**
     * Creates an instance of SinglyLinkedList.
     * @param {any} [value=null] - The initial value to be added to the list.
     */
    constructor(value = null) {
        /**
         * The head node of the linked list.
         * @type {LinkedListNode|null}
         */
        this.head = value !== null ? new LinkedListNode(value) : null;
    }

    /**
     * Adds a value to the end of the linked list.
     * @param {any} value - The value to be added.
     */
    addLast(value) {
        const newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
    }

    /**
     * Adds a value to the beginning of the linked list.
     * @param {any} value - The value to be added.
     */
    addFirst(value) {
        const newHead = new LinkedListNode(value);
        newHead.next = this.head;
        this.head = newHead;
    }

    /**
     * Returns the first value of the linked list.
     * @returns {any} The first value, or -1 if the list is empty.
     */
    returnFirst() {
        if (!this.head) return -1;
        return this.head.value;
    }

    /**
     * Returns the last value of the linked list.
     * @returns {any} The last value, or -1 if the list is empty.
     */
    returnLast() {
        if (!this.head) return -1;
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        return curr.value;
    }

    /**
     * Deletes the first node of the linked list.
     */
    deleteFirst() {
        if (!this.head) return;
        this.head = this.head.next;
    }

    /**
     * Deletes the last node of the linked list.
     */
    deleteLast() {
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let curr = this.head;
        while (curr.next && curr.next.next) {
            curr = curr.next;
        }
        curr.next = null;
    }
}

module.exports = SinglyLinkedList;
