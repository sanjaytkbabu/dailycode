// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

//     Each row must contain the digits 1-9 without repetition.
//     Each column must contain the digits 1-9 without repetition.
//     Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Note:

//     A Sudoku board (partially filled) could be valid but is not necessarily solvable.
//     Only the filled cells need to be validated according to the mentioned rules.


function isValidSudoku(board: string[][]): boolean {

    let output = true;


    for(let i = 0; i < board.length; i++){

        for(let j =0; j < board[i].length; j++){

            // if(board[i].indexOf(board[i][j])==j)
            // return false;
            // else {
            //     for(let k = 0; k < )
            // }


        }


    }



    return output;
};

let board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

//let output = isValidSudoku(board);

//console.log(output);

console.log(board[][0]);

export{}