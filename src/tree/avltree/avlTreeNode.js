const { checkNumber } = require("../../utils/typeCheckingFunctions");


class AVLTreeNode {
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
        this.height = 1;
    }
}


module.exports = AVLTreeNode;