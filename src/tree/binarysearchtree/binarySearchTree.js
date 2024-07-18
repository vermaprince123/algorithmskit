const BinaryTreeNode = require("./binaryTreeNode");

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new BinaryTreeNode(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
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

    search(value) {
        return this._searchNode(this.root, value);
    }

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


module.exports = BinarySearchTree;