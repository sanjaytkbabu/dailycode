// This question is asked by Amazon. Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position. The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.

// Ex: Given the following strings...

// "LR", return true
// "URURD", return false
// "RUULLDRD", return true

let origin:number[] = [0,0];

let curPosition:number[] = [0,0];


const makeMove=(move: string):any => {

if(move == 'L')
curPosition[0]-=1;
else if (move == 'R')
curPosition[0]+=1;
else if (move == 'U')
curPosition[1]+=1;
else 
curPosition[1]-=1;


}
//makeMove('L');

let input1:string = 'LR';
let input2:string = 'URURD';
let input3:string = 'RUULLDRD';

let splitInput = input2.split("");

for(let i = 0; i<splitInput.length; i++){
    makeMove(splitInput[i])
}

console.log(curPosition)

if(curPosition[0] == 0 && curPosition[1] == 0)
    console.log("true")
    else
    console.log("false")
