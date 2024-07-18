const TrieNode = require("./trienode");


class Trie {
    constructor() {
        this.root = new TrieNode(); // Initialize with a root node
    }

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

    delete(word) {
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
