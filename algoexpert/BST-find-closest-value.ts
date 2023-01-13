
//   Write a function that takes in a Binary Search Tree (BST) and a target integer
//   value and returns the closest value to that target value contained in the BST.




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
        if (cur.val > val) {
            prev = cur;
            cur = cur.left;
        }

        else {
            prev = cur;
            cur = cur.right;
        }

    }

    if (prev.val > val)
        prev.left = new TreeNode(val);
    else
    prev.right = new TreeNode(val);



}



return root;
}


function inOrder(root: TreeNode):number[]{
    let output = new Array();

    inOrderTraverse(root);

    function inOrderTraverse(root: TreeNode) {
        if (root == null)
            return;
    
        inOrderTraverse(root.left);
       // console.log(root.val);
        output.push(root.val);
        inOrderTraverse(root.right);
    
    }

    return output;
}


function findClosest(root: TreeNode, target: number): number{
    let output = 0;
    
    let currentNode = root;
    output = currentNode.val;
    while(currentNode!=null){
        if(target < currentNode.val && (Math.abs(target-output) > Math.abs(target-currentNode.val))){
            currentNode = currentNode.left;
        }
    }

    return output;
}

function findClosestArray(inOrderArray: number[], target: number): number{
    let closest = inOrderArray[0];



    for(let i = 1; i<inOrderArray.length; i++){

       // console.log(inOrderArray[i] + " " + target)

        if(Math.abs(closest - target) > Math.abs(inOrderArray[i] - target))
        closest = inOrderArray[i];

    }


    return closest;
}

let input1 = [10,5,15,2,5,13,22,1,14];
let root = insertBST(input1);
console.log(root);
let inOrderArr = inOrder(root);
console.log(inOrderArr);
let closest = findClosestArray(inOrderArr, 15);
console.log("closest = " + closest);

export{}