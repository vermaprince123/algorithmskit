export class TrieNode {
    constructor() {
        this.children = {}; // To store child nodes
        this.isEndOfWord = false; // To mark the end of a word
    }
}