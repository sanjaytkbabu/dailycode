// Given a binary search tree, rearrange the tree such that it forms a linked list where all its values are in ascending order.

// Ex: Given the following tree...
//         5
//        / \
//       1   6

// return...

// 1
//  \
//   5
//    \
//     6

// Ex: Given the following tree...

//        5
//       / \
//     2    9
//    / \ 
//   1   3 

// return...

// 1
//  \
//   2
//    \
//     3
//      \
//       5
//        \
//         9

// Ex: Given the following tree...

// 5
//  \
//   6

// return...

// 5
//  \
//   6


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

let input = [4, 2, 7, 1, 3];
let input2 = [5,1,6];
let input3 = [5, 2, 9, 1, 3];
let input4 = [5, 6];
let root = insertBST(input4);
console.log(root);
let output = inOrder(root);
console.log(output);
//preOrderTraversal(root);
//console.log(root);
//let output = searchBST(root, 4);

//console.log(output);

export { }