class Node {
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    // todo: has to work on prev object for remove and understand the one implimented on insert
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.head.prev = newNode;
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
        } else if (index === 0) {
            return this.prepend(value);
        }
        const newNode = new Node(value, null);
        const leader = this.transverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.next = follower;
        newNode.prev = leader;
        follower.prev = newNode;
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
            leader.prev = leader;
            this.length--;
            return this;
        }
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

    isValidNumber(n) {
        return n === n + 0 ? true : console.error(`${n} is not a valid number`);
    }

}


module.exports = DoublyLinkedList;