const TrieNode = require("./trienode");

/**
 * @class
 * Represents a Trie (prefix tree) data structure.
 */
class Trie {
    /**
     * Creates an instance of Trie.
     */
    constructor() {
        /** 
         * The root node of the Trie.
         * @type {TrieNode}
         */
        this.root = new TrieNode();
    }

    /**
     * Inserts a word into the Trie.
     * @param {string} word - The word to insert.
     */
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    /**
     * Searches for a word in the Trie.
     * @param {string} word - The word to search for.
     * @returns {boolean} True if the word is found, otherwise false.
     */
    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    /**
     * Deletes a word from the Trie.
     * @param {string} word - The word to delete.
     */
    delete(word) {
        /**
         * Helper function to delete a word recursively.
         * @param {TrieNode} node - The current node.
         * @param {string} word - The word to delete.
         * @param {number} index - The current index in the word.
         * @returns {boolean} True if the child node should be deleted, otherwise false.
         */
        const deleteRecursively = (node, word, index) => {
            if (index === word.length) {
                if (!node.isEndOfWord) {
                    return false; 
                }
                node.isEndOfWord = false;
                return Object.keys(node.children).length === 0;
            }

            const char = word[index];
            const childNode = node.children[char];
            if (!childNode) {
                return false; 
            }

            const shouldDeleteChild = deleteRecursively(childNode, word, index + 1);

            if (shouldDeleteChild) {
                delete node.children[char]; 
                return Object.keys(node.children).length === 0 && !node.isEndOfWord; 
            }

            return false;
        };

        deleteRecursively(this.root, word, 0);
    }

    /**
     * Checks if any word in the Trie starts with the given prefix.
     * @param {string} prefix - The prefix to check.
     * @returns {boolean} True if there is any word with the given prefix, otherwise false.
     */
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}

module.exports = Trie;