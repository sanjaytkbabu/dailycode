// This question is asked by Apple. Given two sorted linked lists, merge them together in ascending order and return a reference to the merged list

// Ex: Given the following lists...

// list1 = 1->2->3, list2 = 4->5->6->null, return 1->2->3->4->5->6->null
// list1 = 1->3->5, list2 = 2->4->6->null, return 1->2->3->4->5->6->null
// list1 = 4->4->7, list2 = 1->5->6->null, return 1->4->4->5->6->7->null



class ListNode {
    value: number | null = null;
    next: ListNode | null;

    constructor(value?: number){
        if(value)
        this.value = value;
        this.next = null;
    }
    
}

function MergeLinkedLists(list1: ListNode, list2: ListNode): ListNode | null {

    let output = new ListNode();
    let head = output;

    function compareList(){
    if(list1.value<list2.value)
    {
        head.value = list1.value;
        list1 = list1.next;
    }
    else {
        head.value = list2.value;
        list2 = list2.next;
    }
}
compareList();

    while(list1!=null && list2!=null){
        head.next = new ListNode();
        head = head.next;
        compareList();
    }
    if(list1!=null)
    head.next = list1;

    if(list2!=null)
    head.next = list2;

    return output;
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

let list1Array: number[] = [1,2,3];
let list2Array: number[] = [4,5,6];

let list1 = initLists(list1Array);
let list2 = initLists(list2Array);

let output = MergeLinkedLists(list1, list2);

//displayList(list1);
//displayList(list2);

displayList(output);
export {};