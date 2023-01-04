// This question is asked by Google. Given the reference to the root of a binary search tree and a search value, return the reference to the node that contains the value if it exists and null otherwise.
// Note: all values in the binary search tree will be unique.

// Ex: Given the tree...

//         3
//        / \
//       1   4
// and the search value 1 return a reference to the node containing 1.

// Leetcode

// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.



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
 

function searchBST(root: TreeNode | null, val: number): TreeNode | null {

    let output = new TreeNode();

    output = root;

    while(output!=null && output.val!=val){
        if(output.val > val)
        output = output.left;
        else
        output = output.right;
    }

    return output;
};

export{}