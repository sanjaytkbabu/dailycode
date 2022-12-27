// This question is asked by Facebook. Given a linked list, containing unique values, reverse it, and return the result.

// Ex: Given the following linked lists...

// 1->2->3->null, return a reference to the node that contains 3 which points to a list that looks like the following: 3->2->1->null
// 7->15->9->2->null, return a reference to the node that contains 2 which points to a list that looks like the following: 2->9->15->7->null
// 1->null, return a reference to the node that contains 1 which points to a list that looks like the following: 1->null

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
    return list;
}

function displayList(input: ListNode | any){

    while(input!=null){
        console.log(input?.value?.toString());
        input = input?.next!;

    }

}


function reverseList(input: ListNode): ListNode {

    let output = new ListNode();

    let head = input;
    let inputArray = new Array();

    while(head!=null){
        inputArray.push(head);
        head = head.next;
    }
    for(let i = inputArray.length-1; i > 0; i--){

        inputArray[i].next = inputArray[i-1];

    }
    inputArray[0].next = null;
    input = inputArray[inputArray.length-1];

    return input;
}



let inputArray: number[] = [1];
let inputList = initLists(inputArray);
let output = reverseList(inputList);
displayList(output);
export {}