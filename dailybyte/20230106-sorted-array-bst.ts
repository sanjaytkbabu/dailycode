// Given an array of numbers sorted in ascending order, return a height-balanced binary search tree using every number from the array.
// Note: height-balanced meaning that the level of any node’s two subtrees should not differ by more than one.

// Ex: Given the following nums...

// nums = [1, 2, 3] return a reference to the following tree...
//        2
//       /  \
//      1    3

// Ex: Given the following nums...

// nums = [1, 2, 3, 4, 5, 6] return a reference to the following tree...
//         3
//        / \
//       2   5
//      /   / \
//     1   4   6

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function insertBST(input: number[]): TreeNode {

let root: any = null;
for (let i of input) {
    if (root == null) {
        root = new TreeNode();
        root.val = i;
    }
    else {
        insert(i);
    }

}

function insert(val: number) {
    let cur = root;
    let prev = null;

    while (cur != null) {
        //  console.log("cur " + cur.val);
        // if (cur.val > val) {
        //     prev = cur;
        //     cur = cur.left;
        // }

        // else {
        //     prev = cur;
        //     cur = cur.right;
        // }

        if(cur.left==null){

        }

    }

    // if (prev.val > val)
    //     prev.left = new TreeNode(val);
    // else
    // prev.right = new TreeNode(val);



}



return root;
}

function insertHeightBalancedBST(input: number[]){

    //let root = new TreeNode(input[0]);
    let i = 0;
    let j = input.length-1;
    let root;
    //console.log(root);
    root = insert(root, i, j);

    function insert(root: any, i: number, j: number){

        if(i>j)
        {   console.log("exiting...");
            return root;
        }
        root = new TreeNode();
        console.log("finding half");

        let halfIndex = Math.ceil((j-i)/2) + i;
        console.log(input[halfIndex]);
       // let half = input[halfIndex];
        //root = new TreeNode();
        root.val = input[halfIndex];
        root.left = insert(root.left, i, halfIndex-1);
        root.right = insert(root.right, halfIndex+1, j);
        return root;

    }
//console.log(root);
return root;
}

function levelOrderTraversal(root: TreeNode): number[]{
    let result = new Array();


    let queue = new Array();

    if(root == null)
    return result;

    queue.push(root);

    while(queue.length!=0){
        let size = queue.length;
        let line = "";
        let lineArray = new Array();
        for(let i =0; i < size; i++){
            let node = queue.shift();
            
            if(node.left!=null)
            queue.push(node.left);
            if(node.right!=null)
            queue.push(node.right);
            lineArray.push(node.val);

            line = line +" " + node.val;
            
        }
       // console.log(line);
       result.push(lineArray);
    }

    return result;
}



let input1 = [1,2,3];
let input2 = [1, 2, 3, 4, 5, 6];
let input3 = [2,10,15,20];
insertHeightBalancedBST(input2);
//let root = insertBST(input2);
//console.log(root);
//let result = levelOrderTraversal(root);
//console.log(result);
//printTree(root);
//inOrder();

//console.log(Math.ceil(5/2));
export{}