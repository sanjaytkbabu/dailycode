// This question is asked by Microsoft. Given a linked list, containing unique numbers, return whether or not it has a cycle.
// Note: a cycle is a circular arrangement (i.e. one node points back to a previous node)

// Ex: Given the following linked lists...

// 1->2->3->1 -> true (3 points back to 1)
// 1->2->3 -> false
// 1->1 true (1 points to itself)


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


function containsCycle(input: ListNode):boolean {

    let contains:boolean = false;

    let inputArray = Array();

    let head = input;

    inputArray.push(head.value);
    head = head.next;
    while(head!=null){
        if(inputArray.indexOf(head.value)!=-1){
            contains = true;
            break;
        }
        head = head.next;
        
    }

    return contains;
}



let inputArray: number[] = [1,1];
let inputList = initLists(inputArray);
//let value:number = 1;
//let output = removeValue(inputList, value);
//displayList(output);
let output = containsCycle(inputList);
console.log(output.toString());
export {}