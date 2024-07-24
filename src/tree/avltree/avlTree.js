const { checkNumber } = require("../../utils/typeCheckingFunctions");
const AVLTreeNode = require("./avlTreeNode");

/**
 * Class representing an AVL Tree.
 */
class AVLTree {
    constructor() {
        /**
         * The root node of the AVL Tree.
         * @type {AVLTreeNode|null}
         */
        this.root = null;
    }

    _checkInputType(value) {
        try {
            checkNumber(value);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Gets the height of a node.
     * @param {AVLTreeNode|null} node - The node to get the height of.
     * @returns {number} The height of the node.
     */
    getHeight(node) {
        if (!node) return 0;
        return node.height;
    }

    /**
     * Gets the balance factor of a node.
     * @param {AVLTreeNode|null} node - The node to get the balance factor of.
     * @returns {number} The balance factor of the node.
     */
    getBalanceFactor(node) {
        if (!node) return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    /**
     * Performs a right rotation on the given node.
     * @param {AVLTreeNode} y - The node to rotate.
     * @returns {AVLTreeNode} The new root of the rotated subtree.
     */
    rotateRight(y) {
        let x = y.left;
        let T2 = x.right;

        x.right = y;
        y.left = T2;

        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        return x;
    }

    /**
     * Performs a left rotation on the given node.
     * @param {AVLTreeNode} x - The node to rotate.
     * @returns {AVLTreeNode} The new root of the rotated subtree.
     */
    rotateLeft(x) {
        let y = x.right;
        let T2 = y.left;

        y.left = x;
        x.right = T2;

        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

        return y;
    }

    /**
     * Inserts a value into the AVL Tree.
     * @param {number} value - The value to insert.
     */
    insert(value) {
        this._checkInputType(value);
        this.root = this._insertNode(this.root, value);
    }

    /**
     * Inserts a value into the subtree rooted at the given node.
     * @param {AVLTreeNode|null} node - The root of the subtree.
     * @param {number} value - The value to insert.
     * @returns {AVLTreeNode} The new root of the subtree.
     * @private
     */
    _insertNode(node, value) {
        if (!node) return new AVLTreeNode(value);

        if (value < node.value) {
            node.left = this._insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._insertNode(node.right, value);
        } else {
            return node;
        }

        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        let balance = this.getBalanceFactor(node);

        // Left Left Case
        if (balance > 1 && value < node.left.value) {
            return this.rotateRight(node);
        }

        // Right Right Case
        if (balance < -1 && value > node.right.value) {
            return this.rotateLeft(node);
        }

        // Left Right Case
        if (balance > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        // Right Left Case
        if (balance < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }

    /**
     * Performs an in-order traversal of the AVL Tree.
     * @param {AVLTreeNode|null} [node=this.root] - The node to start traversal from.
     * @returns {number[]} The values of the nodes in in-order sequence.
     */
    inOrderTraversal(node = this.root) {
        let result = [];

        function traverse(node) {
            if (node) {
                traverse(node.left);
                result.push(node.value);
                traverse(node.right);
            }
        }

        traverse(node);
        return result;
    }
}

module.exports = AVLTree;
