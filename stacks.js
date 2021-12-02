class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = first;
        this.last = null;
        this.size = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else{
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp
        }
        this.size++;
        return this.size;
    }

    pop(){
        if(!this.first) return undefined;
        let temp = this.first;
        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--;
        return temp.value
    }
}