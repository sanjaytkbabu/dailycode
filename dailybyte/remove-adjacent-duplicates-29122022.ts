// This question is asked by Facebook. Given a string s containing only lowercase letters, continuously remove adjacent characters that are the same and return the result.

// Ex: Given the following strings...

// s = "abccba", return ""
// s = "foobar", return "fbar"
// s = "abccbefggfe", return "a"

function removeAdjacentDuplicates(s: string): string {

    let output: string = "";

    let sStack = new Array();

    for (let i of s) {
        if (sStack[sStack.length - 1] == i)
            sStack.pop();
        else
            sStack.push(i);
    }

    output = sStack.join("");

    return output;
}


let s1 = "abccba";
let s2 = "foobar";
let s3 = "abccbefggfe";

let output = removeAdjacentDuplicates(s3);

console.log(output);


export { };