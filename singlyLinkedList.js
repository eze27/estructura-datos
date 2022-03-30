// 0 --> 1 -- > 2 -- > 3-- > 4-- > 5 -- > 6 --> null
//0;
// let singlyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null,
//         },
//       },
//     },
//   },
// };

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList {
    constructor(value) {
        // creamos el inicio de nuestro SinglyLinkedList
        this.head = {
            value: value,
            next: null,
        };
        // Aqui sucede la magia ✨
        // Es por referencia
        // Lo que pase en tail afecta head
        this.tail = this.head;

        this.length = 1;

        console.log('Constructor');
    }
    //Añadir Nodo al final 
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;

        this.length++;
        return this;

    }
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;

        this.length++;

        return this;
    }

    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    remove( index ){
        

    }
}
const singleLinked= new MySinglyLinkedList(1);
singleLinked.append(2);