// This question is asked by Microsoft. Given a string, return the index of its first unique character. If a unique character does not exist, return -1.

// Ex: Given the following strings...

// "abcabd", return 2
// "thedailybyte", return 1
// "developer", return 0


let findFirstUnique = (input: string): number => {


    for(let i = 0; i < input.length; i++){
        if(input.split(input[i]).length == 2)
        return i;
        
    }

    return -1;

}

let input1: string = "abcabd";
let input2: string = "thedailybyte";
let input3: string = "developer";
let input4 = "aabb";

console.log(findFirstUnique(input4));

export{};