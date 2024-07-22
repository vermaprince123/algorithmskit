const { checkNumber } = require("../../utils/typeCheckingFunctions");


class BinaryTreeNode {
    constructor(value) {
        try{
            checkNumber(value);
        }
        catch (error){
            throw error;
        }
        
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

module.exports = BinaryTreeNode;