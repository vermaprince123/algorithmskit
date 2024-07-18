const SinglyLinkedList = require("./singlylinkedlist");

class Queue {
    constructor() {
        this.list = new SinglyLinkedList();
        this.size = 0;
    }

    enqueue(value) {
        this.list.addLast(value);
        this.size++;
    }

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

    peek() {
        if (this.size === 0) {
            console.log("Queue is empty!");
            return null;
        }

        return this.list.returnFirst();
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

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