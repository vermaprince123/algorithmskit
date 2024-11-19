class SkipListNode {
    constructor(value, level) {
        this.value = value;
        this.forward = new Array(level + 1).fill(null); // Array of forward references
    }
}

module.exports = SkipListNode;