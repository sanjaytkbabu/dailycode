// Given a binary tree, return the largest value in each of its levels. Ex: Given the following tree…

//     2
//    / \
//   10  15
//         \
//          20
// return [2, 15, 20]

// Ex: Given the following tree…

//           1
//          / \
//         5   6
//        / \   \  
//       5   3   7 
// return [1, 6, 7]


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

function maxValueinLevel(root: TreeNode): number[]{
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
       result.push(Math.max.apply(null, lineArray));
    }

    return result;
}


function insertBinaryTree(input: number[]): TreeNode{
    let root: any;

    root = new TreeNode();
    root.val = input[0];

    let queue = new Array();
    queue.push(root);

    for(let i=1; i<input.length; i++){
        for(let j of queue){
            if(j.left==null)
            {
                j.left = new TreeNode(input[i]);
                queue.push(j.left);break;
            }
            if(j.right==null)
            {
                j.right = new TreeNode(input[i]);
                queue.push(j.right);break;
            }
        }
    }
    return root;
}


let input1 = [2,10,15,20];
let input2 = [1,5,6,5,3,7];
let input3 = [95,3,100,50,43,5,99];
let root = insertBinaryTree(input2);
let result = maxValueinLevel(root);
console.log(result);


// function sortArraywithCompare(){
//     console.log(input3.sort(function(a,b){return a-b}));
// }

//null/this/Math will do, the 1st param is basically the context or this. obv math doesn't require it
//console.log(Math.max.apply(null, input3));



export{}