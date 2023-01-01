function searchMatrix(matrix: number[][], target: number): boolean {
    let output = false;

    if(target > matrix[matrix.length-1][matrix[matrix.length-1].length-1] || target < matrix[0][0])
    return false;

    let i = 0, j = matrix[matrix.length-1].length-1;


    while(i<matrix.length && j>-1){
        if(matrix[i][j]==target)
        return true;
        else if(target < matrix[i][j])
        j--;
        else 
        i++;
    }

    return output;
};

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];

let target = 95;

let output = searchMatrix(matrix, target);

console.log(output)

export{}

//This is solved using Binary Search Tree || Staircase search