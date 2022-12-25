// This question is asked by Google. Given a linked list and a value, remove all nodes containing the provided value, and return the resulting list.

// Ex: Given the following linked lists and values...

// 1->2->3->null, value = 3, return 1->2->null
// 8->1->1->4->12->null, value = 1, return 8->4->12->null
// 7->12->2->9->null, value = 7, return 12->2->9->null

class ListNode {
    value: number | null = null;
    next: ListNode | null;

    constructor(value?: number){
        if(value)
        this.value = value;
        this.next = null;
    }
    
}

function initLists(input: any[]): ListNode{

    let cur: any = null;
    let list = cur;
    for (let i of input){
        if(cur == null){
        cur = new ListNode();
        cur.value = i;
        list = cur;
        
        }
        else{
            
        cur.next = new ListNode();
        cur = cur.next;
        cur.value = i;
        }
        
        
    }
   // cur.next = new ListNode();
    return list;
}

function displayList(input: ListNode | any){

    while(input!=null){
        console.log(input?.value?.toString());
        input = input?.next!;

    }

}

function removeValue(input: ListNode, value: number):ListNode {
    let output = new ListNode(0);

    let head = output, tail = output;
    head.next = input;

    head = head.next;

    while(head!=null){

        if(head.value == value){
        tail.next = tail.next.next;
        }
        else{
            tail = tail.next;
        }

        head = head.next;
       
    }

    return output.next;
}


let inputArray: number[] = [8,1,1,4,12];
let inputList = initLists(inputArray);
let value:number = 1;
let output = removeValue(inputList, value);
displayList(output);

export {}