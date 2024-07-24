import { checkNumber } from "../utils/typeCheckingFunctions";

export class LinkedListNode{
    constructor(value){
        try{
            checkNumber(value);
        }
        catch (error){
            throw error;
        }
        
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
