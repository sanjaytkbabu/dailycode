// This question is asked by Google. Given a string, reverse all of its characters and return the resulting string.

// Ex: Given the following strings...

// “Cat”, return “taC”
// “The Daily Byte”, return "etyB yliaD ehT”
// “civic”, return “civic”

let input:string = 'The Daily Byte';

let splitArray:string[] = input.split("");
//let s3 = new Array<String>(s2.length);
//let j = 0;
let reverseString:string="";
for(let i = splitArray.length-1; i>=0; i--){
    //console.log(s2[i])
   // s3[j] = s2[i];
    //j++;
    reverseString = reverseString.concat(splitArray[i]);

}
console.log(reverseString);
