// This question is asked by Apple. Given a potentially cyclical linked list where each value is unique, return the node at which the cycle starts. If the list does not contain a cycle, return null.

// Ex: Given the following linked lists...

// 1->2->3, return null
// 1->2->3->4->5->2 (5 points back to 2), return a reference to the node containing 2
// 1->9->3->7->7 (7 points to itself), return a reference to the node containing 7

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
   // cur.next = list;
    return list;
}

function displayList(input: ListNode | any){

    while(input!=null){
        console.log(input?.value?.toString());
        input = input?.next!;

    }

}


function returnStartOfCycle(input: ListNode):ListNode {

    let cycleHead = new ListNode(0);

    let inputArray = Array();

    let head = input;

    inputArray.push(head.value);
    head = head.next;
    while(head!=null){
        if(inputArray.indexOf(head.value)!=-1){
            cycleHead = head;
            break;
        }
        inputArray.push(head.value);
        head = head.next;
        
    }

    return cycleHead;
}



let inputArray: number[] = [1,9,3,7,7];
let inputList = initLists(inputArray);
//let value:number = 1;
//let output = removeValue(inputList, value);
//displayList(output);
let output = returnStartOfCycle(inputList);
console.log(output.value);
export {}