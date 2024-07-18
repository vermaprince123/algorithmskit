const DoublyLinkedList = require("./doublylinkedlist");

class Deque {
    constructor() {
        this.list = new DoublyLinkedList();
        this.size = 0;
        this.capacity = 10000;
    }

    addFront(value) {
        if(this.size === this.capacity){
            console.log("Deque Full!");
            return;
        }
        this.list.addFirst(value);
        this.size++;
    }

    addRear(value) {
        if(this.size === this.capacity){
            console.log("Deque Full!");
            return;
        }
        this.list.addLast(value);
        this.size++;
    }

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

    peekFront() {
        if (this.size === 0) {
            console.log("Deque is empty!");
            return null;
        }
        return this.list.returnFirst();
    }

    peekRear() {
        if (this.size === 0) {
            console.log("Deque is empty!");
            return null;
        }
        return this.list.returnLast();
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

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

module.exports = Deque;
