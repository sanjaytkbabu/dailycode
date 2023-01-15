// Given a binary search tree that contains unique values and two nodes within the tree, a, and b, return their lowest common ancestor.
// Note: the lowest common ancestor of two nodes is the deepest node within the tree such that both nodes are descendants of it.

// Ex: Given the following tree...
//        7
//       / \
//     2    9
//    / \ 
//   1   5 
// and a = 1, b = 9, return a reference to the node containing 7.

// Ex: Given the following tree...

//         8
//        / \
//       3   9
//      / \ 
//     2   6
// and a = 2, b = 6, return a reference to the node containing 3.

// Ex: Given the following tree...

//         8
//        / \
//       6   9
// and a = 6, b = 8, return a reference to the node containing 8.


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
            //cur = new TreeNode();
            //    console.log("else " + i + " root " + root.left!=null?root.left.val:0 + " " + root.right!=null?root.right.val:0);
            // console.log("else " + i + " root ");    
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

        if (prev.val < val)
            prev.right = new TreeNode(val);
        else
            prev.left = new TreeNode(val);

        // cur = new TreeNode();
        // cur.val = val;
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
        //console.log(root.val);
        output.push(root.val);
        inOrderTraverse(root.right);
    
    }

    return output;
}



function preOrderTraversal(root: TreeNode) {
    if (root == null)
        return;

    console.log(root.val);
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);

}
function postOrderTraversal(root: TreeNode) {
    if (root == null)
        return;

    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    console.log(root.val);

}

function lowestCommonAncestor(root: TreeNode, a: number, b: number): TreeNode{

    let currentNode = root;

    while(currentNode!=null){
        if((currentNode.val < a && currentNode.val < b) || (currentNode.val > a && currentNode.val > b)){
                if(currentNode.val < a)
                currentNode = currentNode.right;
                else if(currentNode.val > a)
                currentNode = currentNode.left;
                else if (currentNode.val == a || currentNode.val == b)
                return currentNode;
            
        } else {
            return currentNode;
        }
    }


    return currentNode;
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

let input = [7,2,9,1,5];
let input2 = [8,3,9,2,6];
let input3 = [8,6,9];
let input4 = [5, 6];
let root = insertBST(input3);
//console.log(root);
//let output = inOrder(root);
//console.log(output);
let levels = levelOrderTraversal(root);
console.log(levels);
let output = lowestCommonAncestor(root,6,8);
console.log("lowest common ancestor = " + output.val);

//preOrderTraversal(root);
//console.log(root);
//let output = searchBST(root, 4);

//console.log(output);

export { }