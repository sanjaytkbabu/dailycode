// This question is asked by Amazon. Given a non-empty linked list, return the middle node of the list. If the linked list contains an even number of elements, return the node closer to the end.
// Ex: Given the following linked lists...

// 1->2->3->null, return 2
// 1->2->3->4->null, return 3
// 1->null, return 1

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


function findMiddleElement(input: ListNode):number{
    let head = input;

    let getCount = (input: ListNode): number => {
        let count = 0;
        let head = input;

        while(head!=null){
            count++;
            head = head.next;
        }

        return count;
    }


    let count = getCount(input);

    

    console.log("count = " + count.toString());

    console.log("head = " + head.value.toString());

    let middleIndex = count%2!=0?Math.floor(count/2):(count/2)+1;

    console.log("middleIndex=" + middleIndex);

    for(let i = 1; i <= middleIndex; i++){
        head = head.next;
    }

    return head.value;
}



let inputArray: number[] = [1];
let inputList = initLists(inputArray);
let value:number = 1;
//let output = removeValue(inputList, value);
//displayList(output);
let output = findMiddleElement(inputList);
console.log("Middle Elemet = " + output.toString());
export {}