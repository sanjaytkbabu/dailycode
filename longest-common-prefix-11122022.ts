// This question is asked by Microsoft. Given an array of strings, return the longest common prefix that is shared amongst all strings.
// Note: you may assume all strings only contain lowercase alphabetical characters.

// Ex: Given the following arrays...

// ["colorado", "color", "cold"], return "col"
// ["a", "b", "c"], return ""
// ["spot", "spotty", "spotted"], return "spot"



let input1: string[] = ["colorado", "color", "cold"];
let input2: string[] = ["a", "b", "c"];
let input3: string[] = ["spot", "spotty", "spotted"];

//console.log(input[0][0]);

// const findPrefix = (input: string[]) => {

//     let longestPrefix: string = "";

//     for(let i = 1; i < input.length; i++){
//         for(let j = 0; j < input[i].length; j++){
            
//             if(input[0][j] == input[i][j])
//             longestPrefix = longestPrefix + input[0][j];
//         }
//     }

// console.log(longestPrefix);

// }

//findPrefix(input);

const findSmallestString = (input: string[]): string => {

    let smallestString = input[0];

for(let i = 1; i < input.length; i++){
    if(smallestString.length > input[i].length){
        smallestString = input[i];
    }
}
console.log("smallestString = " + smallestString)
return smallestString;

}





const findLongestPrefix = (input: string[]): string => {
    let smallestString = findSmallestString(input);
    
    let longestPrefix = smallestString;

    // for(let i = 0; i < input.length; i++){
    //     if(input[i].includes(longestPrefix))

    // }

    //let allHaveIt = true;

    for(let i = 0; i< input.length; i++){
        if(input[i].includes(longestPrefix))
        {

        }
        else{
            //allHaveIt = false;
            longestPrefix = smallestString.substring(0, longestPrefix.length-1)
        }
    }


    // let flag = true;

    // while(flag){

    // if(input.includes(longestPrefix))
    // {
    //     flag = false;
    // }
    // else {
    // longestPrefix = smallestString.substring(0, longestPrefix.length-1)

    // }    
    // }

    return longestPrefix;
}

let longestPrefix = findLongestPrefix(input3);
console.log("longestPrefix = " + longestPrefix)