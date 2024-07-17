const SinglyLinkedList = require("../linkedlist/singlylinkedlist");


class Stack{
    constructor(){
        this.capacity = 10000;
        this.stackList = new SinglyLinkedList(-1);
        this.size = 0;
    }

    push(value){
        if(size === this.capacity){
            console.log("Stack Full!");
            return;
        }

        this.stackList.addFirst(value);
        this.size++;
    }

    pop(){
        if(this.size === 0){
            console.log("Stack Empty. Nothing to pop");
        }

        let topValue = this.stackList.returnFirst();

        this.stackList.deleteFirst();

        return topValue;
    }

    peek(){
        if(this.size === 0){
            console.log("No elements inside Stack");
        }

        return this.stackList.returnFirst();
    }
}

module.exports = Stack;