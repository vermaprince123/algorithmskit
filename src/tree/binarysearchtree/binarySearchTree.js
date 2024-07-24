import { checkNumber } from "../../utils/typeCheckingFunctions";
import { BinaryTreeNode } from "./binaryTreeNode";

/**
 * Class representing a Binary Search Tree.
 */
export class BinarySearchTree {
    constructor() {
        /**
         * The root node of the Binary Search Tree.
         * @type {BinaryTreeNode|null}
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
     * Inserts a value into the Binary Search Tree.
     * @param {number} value - The value to insert.
     */
    insert(value) {
        this._checkInputType(value);
        const newNode = new BinaryTreeNode(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    /**
     * Inserts a new node into the subtree rooted at the given node.
     * @param {BinaryTreeNode} node - The root of the subtree.
     * @param {BinaryTreeNode} newNode - The new node to insert.
     * @private
     */
    _insertNode(node, newNode) {
        if(newNode.value === node.value) return;
        
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    /**
     * Searches for a value in the Binary Search Tree.
     * @param {number} value - The value to search for.
     * @returns {boolean} True if the value is found, false otherwise.
     */
    search(value) {
        this._checkInputType(value);
        return this._searchNode(this.root, value);
    }

    /**
     * Searches for a value in the subtree rooted at the given node.
     * @param {BinaryTreeNode|null} node - The root of the subtree.
     * @param {number} value - The value to search for.
     * @returns {boolean} True if the value is found, false otherwise.
     * @private
     */
    _searchNode(node, value) {
        if (!node) {
            return false;
        }

        if (value === node.value) {
            return true;
        } else if (value < node.value) {
            return this._searchNode(node.left, value);
        } else {
            return this._searchNode(node.right, value);
        }
    }

    /**
     * Performs a pre-order traversal of the Binary Search Tree.
     * @param {BinaryTreeNode|null} [node=this.root] - The node to start traversal from.
     * @returns {number[]} The values of the nodes in pre-order sequence.
     */
    preorderTraversal(node = this.root) {
        let result = [];

        function traverse(node) {
            if (!node) return;
            result.push(node.value);
            traverse(node.left);
            traverse(node.right);
        }

        traverse(node);
        return result;
    }

    /**
     * Performs an in-order traversal of the Binary Search Tree.
     * @param {BinaryTreeNode|null} [node=this.root] - The node to start traversal from.
     * @returns {number[]} The values of the nodes in in-order sequence.
     */
    inorderTraversal(node = this.root) {
        let result = [];

        function traverse(node) {
            if (!node) return;
            traverse(node.left);
            result.push(node.value);
            traverse(node.right);
        }

        traverse(node);
        return result;
    }

    /**
     * Performs a post-order traversal of the Binary Search Tree.
     * @param {BinaryTreeNode|null} [node=this.root] - The node to start traversal from.
     * @returns {number[]} The values of the nodes in post-order sequence.
     */
    postorderTraversal(node = this.root) {
        let result = [];

        function traverse(node) {
            if (!node) return;
            traverse(node.left);
            traverse(node.right);
            result.push(node.value);
        }

        traverse(node);
        return result;
    }

    /**
     * Performs a level-order traversal of the Binary Search Tree.
     * @returns {number[]} The values of the nodes in level-order sequence.
     */
    levelorderTraversal() {
        if (!this.root) return [];

        let result = [];
        let queue = [this.root];

        while (queue.length > 0) {
            let currentNode = queue.shift();
            result.push(currentNode.value);

            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }

        return result;
    }
}