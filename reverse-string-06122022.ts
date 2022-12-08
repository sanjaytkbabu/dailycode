// This question is asked by Google. Given a string, reverse all of its characters and return the resulting string.

// Ex: Given the following strings...

// “Cat”, return “taC”
// “The Daily Byte”, return "etyB yliaD ehT”
// “civic”, return “civic”

let s:String = 'The Daily Byte';

let s2:string[] = s.split("");
let s3 = new Array<String>(s2.length);
let j = 0;
let s4 = new String;
for(let i = s2.length-1; i>=0; i--){
    //console.log(s2[i])
   // s3[j] = s2[i];
    //j++;
    s4 = s4.concat(s2[i]);

}
console.log(s4);
