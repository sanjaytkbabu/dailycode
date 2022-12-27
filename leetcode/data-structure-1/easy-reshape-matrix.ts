// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]

// Input: mat = [[1,2],[3,4]], r = 2, c = 4
// Output: [[1,2],[3,4]]


// function generate(numRows: number): number[][] {
//    let output = new Array();
//     for(let i = 0; i < numRows; i++){
//         let row = new Array(i+1).fill(0);
//         for(let j = 0; j <= i; j++){
//             if(j==0 || j==i)
//             row[j] = 1;
//             else{
//                 row[j] = output[i-1][j-1] + output[i-1][j];
//             }
            
//         }
//         output.push(row);
//     }

//     return output;
// };

function matrixReshape(mat: number[][], r: number, c: number): number[][] {

    let output = new Array();

    

    if(r*c != mat[0].length*mat.length){
        return mat;
    }
        for(let i=0; i<r; i++){
            let row = new Array(i+1).fill(0);
            for(let j=0; j<c; j++){
                row[i][j] = mat[i][j];
            }
            output.push(row);
        }


    return output;
};




let mat = [[1,2],[3,4]], r = 1, c = 4;

//mat = [[1,2,3,4,5], [1,2,3,4,5]];
let output = matrixReshape(mat, r, c);

console.log(output);

//console.log(mat.length + " " + mat[0].length);


export{}
