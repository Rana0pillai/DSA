const LinkedList = require('./LinkedList/LinkedList.js');
const DoublyLinkedList = require('./LinkedList/DoublyLinkedList.js');

const linkedList = new LinkedList(10);
linkedList.append(56);
linkedList.append(5);
linkedList.prepend(1);
linkedList.insert(2, 22);
linkedList.insert(300, 23);
linkedList.append(5);
// linkedList.remove(5);
linkedList.reverse();
linkedList.printList();

// const doublyLinkedList = new DoublyLinkedList(10);
// doublyLinkedList.append(5);
// doublyLinkedList.append(16);
// doublyLinkedList.prepend(1);
// doublyLinkedList.insert(1, 99);
// doublyLinkedList.insert(300, 23);
// doublyLinkedList.printList();
// doublyLinkedList.remove(5);
// doublyLinkedList.printList();
