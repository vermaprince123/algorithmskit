# algorithmskit

`algorithmskit` is a comprehensive library providing implementations of various data structures and algorithms. It includes classes for common data structures such as linked lists, stacks, queues, trees, and more. Additionally, it provides utility functions for sorting.

## Installation

```
npm install algorithmskit
```

## Classes and Methods

### Singly Linked List (SinglyLinkedList class)
- `addLast(value)`: Adds a value to the end of the linked list. Accepts a number value.
- `addFirst(value)`: Adds a value to the start of the linked list. Accepts a number value.
- `returnFirst()`: Returns the first value of the linked list as a number. Returns -1 if the list is empty.
- `returnLast()`: Returns the last value of the linked list as a number. Returns -1 if the list is empty.
- `deleteFirst()`: Deletes the first node of the linked list.
- `deleteLast()`: Deletes the last node of the linked list.

### Doubly Linked List (DoublyLinkedList class)
- `addLast(value)`: Adds a value to the end of the linked list. Accepts a number value.
- `addFirst(value)`: Adds a value to the start of the linked list. Accepts a number value.
- `returnFirst()`: Returns the first value of the linked list as a number. Returns -1 if the list is empty.
- `returnLast()`: Returns the last value of the linked list as a number. Returns -1 if the list is empty.
- `deleteFirst()`: Deletes the first node of the linked list.
- `deleteLast()`: Deletes the last node of the linked list.

### Stack (Stack class)
- `push(value)`: Pushes a value onto the stack. Accepts a number value.
- `pop()`: Pops the top value from the stack. Returns the popped number value, or -1 if the stack is empty.
- `peek()`: Peeks at the top value of the stack without removing it. Returns the number value at the top, or -1 if the stack is empty.
- `isEmpty()`: Returns true if the stack is empty, otherwise false.
- `getSize()`: Returns the size of the stack.
- `printStack()`: Prints elements in the stack from top to bottom.

### Monotonic Stack (MonotonicStack class)
- `push(key)`: Pushes a key into the MonotonicStack ensuring it remains monotonic (increasing or decreasing). Accepts a number key. Returns the key at the top of the stack just before the push operation.
- Other methods are the same as Stack as the class implements Stack as the parent class.

### Queue (Queue class)
- `enqueue(value)`: Adds an element to the end of the queue. Accepts a number value.
- `dequeue()`: Removes and returns the first element from the queue. Returns the value removed from the front of the queue, or null if the queue is empty.
- `peek()`: Returns the first element of the queue without removing it.
- `isEmpty()`: Returns true if the queue is empty, otherwise false.
- `getSize()`: Returns the size of the queue.
- `printQueue()`: Prints elements in the queue from front to end.

### Deque (Deque class)
- `addFront(value)`: Adds an element to the front of the deque. Accepts a number value.
- `addRear(value)`: Adds an element to the rear of the deque. Accepts a number value.
- `removeFront()`: Removes and returns the first element from the deque. Returns the value removed from the front of the deque, or null if the deque is empty.
- `removeRear()`: Removes and returns the last element from the deque. Returns the value removed from the rear of the deque, or null if the deque is empty.
- `peekFront()`: Returns the first element of the deque without removing it.
- `peekRear()`: Returns the rear element of the deque without removing it.
- `isEmpty()`: Returns true if the deque is empty, otherwise false.
- `getSize()`: Returns the size of the deque.
- `printDeque()`: Prints elements in the deque from front to end.

### Binary Search Tree (BinarySearchTree class)
- `insert(value)`: Inserts a value into the Binary Search Tree. Accepts a number value.
- `search(value)`: Searches for a value in the Binary Search Tree. Accepts a number value. Returns true if the value is found, false otherwise.
- `preorderTraversal(node=this.root)`: Performs a pre-order traversal of the Binary Search Tree. Accepts a BinaryTreeNode (default is the root). Returns an array of numbers in pre-order sequence.
- `inorderTraversal(node=this.root)`: Performs an in-order traversal of the Binary Search Tree. Accepts a BinaryTreeNode (default is the root). Returns an array of numbers in in-order sequence.
- `postorderTraversal(node=this.root)`: Performs a post-order traversal of the Binary Search Tree. Accepts a BinaryTreeNode (default is the root). Returns an array of numbers in post-order sequence.
- `levelorderTraversal()`: Performs a level-order traversal of the Binary Search Tree. Returns an array of numbers in level-order sequence.

### AVL Tree (AVLTree class)
- `getHeight(node)`: Gets the height of a node. Accepts an AVLTreeNode. Returns a number.
- `getBalanceFactor(node)`: Gets the balance factor of a node. Accepts an AVLTreeNode. Returns a number.
- `insert(value)`: Inserts a value into the AVL Tree. Accepts a number value.
- `preorderTraversal(node=this.root)`: Performs a pre-order traversal of the AVL Tree. Accepts an AVLTreeNode (default is the root). Returns an array of numbers in pre-order sequence.
- `inorderTraversal(node=this.root)`: Performs an in-order traversal of the AVL Tree. Accepts an AVLTreeNode (default is the root). Returns an array of numbers in in-order sequence.

### Fenwick Tree (FenwickTree class)
- `build(array)`: Builds the Fenwick Tree from the given array. Accepts an array of numbers.
- `update(i, x)`: Updates the Fenwick Tree with the given value at the specified index. Accepts a number i (index) and a number x (value).
- `query(i)`: Queries the prefix sum from index 1 to the specified index. Accepts a number i (index). Returns a number (prefix sum).
- `rangeQuery(l, r)`: Queries the range sum from index l to index r. Accepts a number l (left index) and a number r (right index). Returns a number (range sum).

### Trie (Trie class)
- `insert(word)`: Inserts a word into the Trie. Accepts a string word.
- `search(word)`: Searches for a word in the Trie. Accepts a string word. Returns true if the word is found, false otherwise.
- `delete(word)`: Deletes a word from the Trie. Accepts a string word.
- `startsWith(prefix)`: Checks if any word in the Trie starts with the given prefix. Accepts a string prefix. Returns true if there is any word with the given prefix, otherwise false.

## Utility Functions
- `countSort(array)`: Performs Count Sort on the given array. Accepts an array of numbers. Returns the sorted array.
- `radixSort(array)`: Performs Radix Sort on the given array. Accepts an array of numbers. Returns the sorted array.
- `randomizedSort(array)`: Performs Randomized Quick Sort on the given array. Accepts an array of numbers. Returns the sorted array.
