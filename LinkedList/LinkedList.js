class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
        return array;
    }

    insert(index, value) {
        if (!this.isValidNumber(index)) return;
        if (index > this.length) {
            return this.append(value);
        }
        const newNode = new Node(value, null);
        const leader = this.transverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this;
    }

    remove(index) {
        if (!this.isValidNumber(index)) return;
        if (index === 0) {
            this.head = this.head.next;
            this.length--;
        }
        else if (index > this.length) {
            console.error(`Index ${index} is out of bounds.`);
            return;
        }
        else {
            const leader = this.transverseToIndex(index - 1);
            const unWantedNode = leader.next;
            leader.next = unWantedNode.next;
            this.tail = new Node(this.findTailNode());
            this.length--;
            return this;
        }
    }

    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = first;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
    }

    transverseToIndex(index) {
        if (!this.isValidNumber(index)) return;
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    findTailNode() {
        let currentNode = this.head;
        let tailValue = '';
        while (currentNode) {
            tailValue = currentNode.value;
            currentNode = currentNode.next;
        }
        return tailValue;
    }

    isValidNumber(n) {
        return n === n + 0 ? true : console.error(`${n} is not a valid number`);
    }

}

module.exports = LinkedList;