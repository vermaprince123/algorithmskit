const LinkedListNode = require("./linkedlistnode");

class SinglyLinkedList {
    constructor(value = null) {
        this.head = value !== null ? new LinkedListNode(value) : null;
    }

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

    addFirst(value) {
        const newHead = new LinkedListNode(value);
        newHead.next = this.head;
        this.head = newHead;
    }

    returnFirst() {
        if (!this.head) return -1;
        return this.head.value;
    }

    returnLast() {
        if (!this.head) return -1;
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        return curr.value;
    }

    deleteFirst() {
        if (!this.head) return;
        this.head = this.head.next;
    }

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
