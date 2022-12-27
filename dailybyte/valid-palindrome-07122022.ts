// This question is asked by Facebook. Given a string, return whether or not it forms a palindrome ignoring case and non-alphabetical characters.
// Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

// Ex: Given the following strings...

// "level", return true
// "algorithm", return false
// "A man, a plan, a canal: Panama.", return true



let input:string = 'A man, a plan, a canal: Panama.';

input = input.replace(/[,:.\s]/g,"");
input = input.toLowerCase();

console.log(input);

let splitArray:string[] = input.split("");
//let s3 = new Array<String>(s2.length);
//let j = 0;
let reverseString:string = "";
for(let i = splitArray.length-1; i>=0; i--){
    //console.log(s2[i])
   // s3[j] = s2[i];
    //j++;
    reverseString = reverseString.concat(splitArray[i]);

}
console.log(reverseString);
if (input==reverseString)
console.log("true");
else
console.log("false")