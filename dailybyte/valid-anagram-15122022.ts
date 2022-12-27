// This question is asked by Facebook. Given two strings s and t return whether or not s is an anagram of t.
// Note: An anagram is a word formed by reordering the letters of another word.

// Ex: Given the following strings...

// s = "cat", t = "tac", return true
// s = "listen", t = "silent", return true
// s = "program", t = "function", return false


let checkAnagram = (s: string, t: string): boolean => {

    if(s.length!=t.length)
    return false;
    else {
        for(let i = 0; i < s.length; i++){
            if(s.split(s[i]).length!=t.split(s[i]).length)
            return false;
        }
    }
    return true;

}
let s1: string = "cat";
let t1: string = "tac";
let s2: string = "listen";
let t2: string = "silent";
let s3: string = "program";
let t3: string = "function";
//console.log(checkAnagram(s3, t3).toString())

// let checkAnagramMatch = (s: string, t: string): boolean => {
//    // let c = ("this is foo bar".match(/o/g)||[]).length;
//     //console.log(c.toString())
//     if(s.length!=t.length)
//     return false;
//     else {
//         for(let i = 0; i < s.length; i++){
//             if(s.match(/s[i]/g)||[].length!=(t.match(/s[i]/g)||[].length))
//             return false;
//         }
//     }
//     return true;
// }

console.log(checkAnagram(s2, t2));