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

function levelOrderTraversal(root: TreeNode): number[]{
    let result = new Array();


    let queue = new Array();

    if(root == null)
    return result;

    queue.push(root);

    while(queue.length!=0){
        let size = queue.length;
        let line = "";
        for(let i =0; i < size; i++){
            let node = queue.shift();
            
            if(node.left!=null)
            queue.push(node.left);
            if(node.right!=null)
            queue.push(node.right);
            result.push(node.val);

            line = line +" " + node.val;
            
        }
        console.log(line);
    }

    return result;
}


let input1 = [10,5,15,2,5,13,22,1,14];
let root = insertBST(input1);
//console.log(root);
let result = levelOrderTraversal(root);
console.log(result);
//inOrder();
export{}