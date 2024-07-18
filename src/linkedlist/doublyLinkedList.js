const LinkedListNode = require("./linkedlistnode");

class DoublyLinkedList {
    constructor(value = null) {
        this.head = value !== null ? new LinkedListNode(value) : null;
        this.tail = this.head;
    }

    addLast(value) {
        const newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    addFirst(value) {
        const newHead = new LinkedListNode(value);
        if (!this.head) {
            this.head = newHead;
            this.tail = newHead;
            return;
        }
        newHead.next = this.head;
        this.head.prev = newHead;
        this.head = newHead;
    }

    returnFirst() {
        if (!this.head) return -1;
        return this.head.value;
    }

    returnLast() {
        if (!this.tail) return -1;
        return this.tail.value;
    }

    deleteFirst() {
        if (!this.head) return;
        if (this.head === this.tail) { // Only one node
            this.head = null;
            this.tail = null;
            return;
        }
        this.head = this.head.next;
        this.head.prev = null;
    }

    deleteLast() {
        if (!this.tail) return;
        if (this.head === this.tail) { // Only one node
            this.head = null;
            this.tail = null;
            return;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
}

module.exports = DoublyLinkedList;