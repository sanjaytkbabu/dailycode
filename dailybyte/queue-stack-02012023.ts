// Design a class to implement a stack using only a single queue. 
// Your class, QueueStack, should support the following stack methods:
// push() (adding an item), pop() (removing an item), peek() 
// s(returning the top value without removing it), and empty() (whether or not the stack is empty).


class MyQueue {

    queue = new Array();


    constructor() {

    }

    push(x: number): void {
        this.queue.push(x);
    }

    pop(): number {
        return this.queue.shift();
    }

    peek(): number {
        return this.queue[0];
    }

    empty(): boolean {
        return this.queue.length==0?true:false;
    }
}


export{}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */