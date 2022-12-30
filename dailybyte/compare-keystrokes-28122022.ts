// This question is asked by Amazon. Given two strings s and t, which represents a sequence of keystrokes, where # denotes a backspace, return whether or not the sequences produce the same result.

// Ex: Given the following strings...

// s = "ABC#", t = "CD##AB", return true
// s = "como#pur#ter", t = "computer", return true
// s = "cof#dim#ng", t = "code", return false

function compareKeystrokes(s: string, t: string):boolean {

    let output = false;

    let sStack = new Array();
    let tStack = new Array();
    

    let processStrings = (input: string):string[] => {

        let inputStack = new Array();

        for(let i of input){
            //console.log(i);
            if(i=='#')
            inputStack.pop();
            else
            inputStack.push(i);
        }

        

        return inputStack;


    }

    sStack = processStrings(s);
    tStack = processStrings(t);

    console.log(sStack);
    console.log(tStack);

    if(sStack.toString() == tStack.toString())
    output = true;

   // console.log(sStack);

    return output;
}


let s1 = "ABC#", t1 = "CD##AB";

let s2 = "como#pur#ter", t2 = "computer";

let s3 = "cof#dim#ng", t3 = "code";

let output = compareKeystrokes(s1, t1);

console.log(output);

export{};