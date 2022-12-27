// This question is asked by Apple. Given two binary strings (strings containing only 1s and 0s) return their sum (also as a binary string).
// Note: neither binary string will contain leading 0s unless the string itself is 0

// Ex: Given the following binary strings...

// "100" + "1", return "101"
// "11" + "1", return "100"
// "1" + "0", return  "1"



// let number = (input: string) => {
//     let number  = 0;
//     let j = 0;
//     for(let i=input.length-1; i>=0; i--){
//         //console.log(Math.pow(2, j));
//         //console.log(input[i]);
//         number+= Number(input[i]) * Math.pow(2, j);
//         j++;

//     }

//     console.log("Number = " + number);
//     return number;
// }
//number("1");


let binary1 = "100";
let binary2 = "1";

// let number1 = number(input1); 
// let number2 = number(input2); 

let number1 = parseInt(binary1,2);
let number2 = parseInt(binary2,2);


let total = number1 + number2;

console.log("total = " + total)

console.log("binary = " + total.toString(2));

// let binary = (input: number) => {




// }