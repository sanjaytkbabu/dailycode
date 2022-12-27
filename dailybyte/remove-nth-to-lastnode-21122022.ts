// This question is asked by Facebook. Given a linked list and a value n, remove the nth to last node and return the resulting list.

// Ex: Given the following linked lists...

// 1->2->3->null, n = 1, return 1->2->null
// 1->2->3->null, n = 2, return 1->3->null
// 1->2->3->null, n = 3, return 2->3->null


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

function removeNthLastnode(input: ListNode, n: number): ListNode{
   let output: ListNode = new ListNode();
  

    let head = output;
    let tail = output;
    head.next = input;

 //Move head in front so that the gap between head and teail becomes n
    for (let i=0; i<n; i++){
        head = head.next;
    }
   // console.log(head.value.toString());
   //Move head to the end, maintaining the gap
    while(head.next!=null){
        head = head.next;
        tail = tail.next;
    }
    tail.next = tail.next.next;


    return output.next;
}

let a: number[] = [1,2,3];
let n: number = 3;
//let b: number[] = [1,5,6];

let list1 = initLists(a);
//let list2 = initLists(b);

//displayList(list1);
displayList(removeNthLastnode(list1, n));
export {}