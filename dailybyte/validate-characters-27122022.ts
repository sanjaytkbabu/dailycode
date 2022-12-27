// This question is asked by Google. Given a string only containing the following characters (, ), {, }, [, and ] return whether or not the opening and closing characters are in a valid order.

// Ex: Given the following strings...

// "(){}[]", return true
// "(({[]}))", return true
// "{(})", return false

var isValid = function(input: string): boolean {
    let stack = Array();
    let inputArray = input.split( "" );
    let output = false;

    for(let i of inputArray){

        if(i == '(')
        stack.push(')');
        else if (i == '{')
        stack.push('}');
        else if (i == '[')
        stack.push(']');
        else if (i == stack[stack.length-1])
        stack.pop();
        else
        return false;

    }

    if(stack.length == 0)
    output = true;

    return output;
};

let input1 = "(){}[]";
let input2 = "(({[]}))";
let input3 = "{(})";

let output = isValid(input3);

console.log(output);

export {};