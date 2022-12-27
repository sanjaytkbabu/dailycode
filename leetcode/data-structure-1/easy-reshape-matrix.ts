// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]

// Input: mat = [[1,2],[3,4]], r = 2, c = 4
// Output: [[1,2],[3,4]]

function matrixReshape(mat: number[][], r: number, c: number): number[][] {

    let output = new Array();

    let m = mat.length, n = mat[0].length;

    if (r * c != m * n) {
        return mat;
    }

    let k = 0;

    let row = new Array(c).fill(0);

    for (let i = 0; i < m; i++) {

        for (let j = 0; j < n; j++) {

            row[k] = mat[i][j];
            k++;
            if (k == c) {
                output.push(row);
                k = 0;
                row = new Array(c).fill(0);
            }
            

        }
    }


    return output;
};




let mat1 = [[1, 2], [3, 4]], r1 = 1, c1 = 4;
let mat2 = [[1, 2], [3, 4]], r2 = 2, c2 = 4;

let output = matrixReshape(mat1, r1, c1);

console.log(output);

export { };
