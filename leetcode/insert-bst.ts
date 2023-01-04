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

function insertBST(input: number[]):TreeNode {

    let root:any = null;
    for(let i of input){
        if(root == null){
        root = new TreeNode();
        root.val = i;
        }
        else{
        //cur = new TreeNode();
    //    console.log("else " + i + " root " + root.left!=null?root.left.val:0 + " " + root.right!=null?root.right.val:0);
   // console.log("else " + i + " root ");    
    insert(i);
        }
        
    }

    function insert(val: number){
        let cur = root;
        let prev = null;

        while(cur!=null){
          //  console.log("cur " + cur.val);
            if(cur.val > val){
                prev = cur;
                cur = cur.left;
            }
            
            else{
                prev = cur;
                cur = cur.right;
            }
            
        }

        if(prev.val < val)
            prev.right = new TreeNode(val);
        else
        prev.left = new TreeNode(val);
        
       // cur = new TreeNode();
       // cur.val = val;
    }



    return root;
}


function traverseTree(root: TreeNode){

 console.log(root.val);
let cur = root;
 while(cur!=null){
    console.log(cur.val);
    cur = cur.left;
 }

}

let input = [4,2,7,1,3];
let root = insertBST(input);

//traverseTree(root);

let output = searchBST(root, 4);

console.log(output);

export{}