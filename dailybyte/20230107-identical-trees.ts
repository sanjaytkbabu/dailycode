// Given two binary trees, return whether or not the two trees are identical. Note: identical meaning they exhibit the same structure and the same values at each node. Ex: Given the following trees...

//         2
//        / \
//       1   3

//     2
//    / \
//   1   3


// return true.

// Ex: Given the following trees...

//         1
//          \
//           9
//            \
//            18

//     1
//    /
//   9
//    \
//     18


// return false.

// Ex: Given the following trees...

//         2
//        / \
//       3   1

//     2
//    / \
//   1   3


// return false.   



 // Definition for a binary tree node.
 class TreeNode {
 val: number
 left: TreeNode | null
 right: TreeNode | null
 constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 this.val = (val===undefined ? 0 : val)
 this.left = (left===undefined ? null : left)
 this.right = (right===undefined ? null : right)
 }
 }
 


function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {


    let inOrderP = inOrderTraversal(p);
    let inOrderQ = inOrderTraversal(q);

    
    function inOrderTraversal(input: TreeNode): number[]{
        let output = Array();

        inOrder(input);
        function inOrder(root: TreeNode){

            if(root == null)
            return;

            inOrder(root.left);
            output.push(root.val);
            inOrder(root.right);

        }


        return output;
    }

    let flag = true;

    if(inOrderP.length!=inOrderQ.length)
   {
    flag = false;
    
   } 
    else {
        for(let i in inOrderP){
            if(inOrderP[i]!=inOrderQ[i])
            {
                flag = false;
                break;
            }
        }
    }

    return flag;

};