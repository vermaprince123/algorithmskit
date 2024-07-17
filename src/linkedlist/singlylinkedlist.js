const LinkedListNode = require("./linkedlistnode")



class SinglyLinkedList{
    constructor(value){
        this.head = new LinkedListNode(value);
    }

    addLast(value){
        if(!this.head){
            this.head = new LinkedListNode(value);
        }
        let curr = this.head;

        while(curr.next){
            curr = curr.next;
        }

        const newNode = new LinkedListNode(value);
        curr.next = newNode;
    }

    addFirst(value){
        if(!this.head){
            this.head = new LinkedListNode(value);
        }

        let newHead = new LinkedListNode(value);
        
        newHead.next = this.head;
        this.head = newHead;
    }

    returnFirst(){
        if(!this.head) return -1;

        return this.head.value;
    }

    returnLast(){
        if(!this.head) return -1;

        let curr = head;

        while(curr.next){
            curr = curr.next;
        }

        return curr.value;
    }

    deleteFirst(){
        if(!this.head) return;

        head = head.next;
    }

    deleteLast(){
        if(!this.head) return;

        let prev = head;
        let curr = head.next;

        while(curr && curr.next){
            prev = curr;
            curr = curr.next;
        }

        prev.next = null;
    }


}

module.exports = SinglyLinkedList;