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

   let cur: any = null;
   let mergedList = cur;
   
    while(list1!=null && list2!=null){

    
        if(cur == null){
            cur = new ListNode();
            mergedList = cur;
        }
        else 
        {cur.next = new ListNode();
        cur = cur.next;
        }

        
        if(list1.value! < list2.value!){
            cur!.value = list1.value;
            list1 = list1.next;
            
        }else {
            cur!.value = list2.value;
            list2 = list2.next;
        }
    }

    if(list1!=null)
    {   
            cur.next = list1;
    }

    if(list2!=null)
    {
        cur.next = list2;
    }


 return mergedList;

    
}

let a: number[] = [4,4,7];
let b: number[] = [1,5,6];

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

let list1 = initLists(a);
let list2 = initLists(b);

let output = MergeLinkedLists(list1, list2);

//displayList(list1);
//displayList(list2);

displayList(output);
