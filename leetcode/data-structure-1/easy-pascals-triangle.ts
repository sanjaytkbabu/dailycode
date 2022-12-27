// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:

// Input: numRows = 1
// Output: [[1]]

function generate(numRows: number): number[][] {
   let output = new Array();
    for(let i = 0; i < numRows; i++){
        let row = new Array(i+1).fill(0);
        for(let j = 0; j <= i; j++){
            if(j==0 || j==i)
            row[j] = 1;
            else{
                row[j] = output[i-1][j-1] + output[i-1][j];
            }
            
        }
        output.push(row);
    }

    return output;
};

let output = generate(5);

console.log(output);

export{}
