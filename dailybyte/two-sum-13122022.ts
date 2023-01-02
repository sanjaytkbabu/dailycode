// This question is asked by Google. Given an array of integers, return whether or not two numbers sum to a given target, k.
// Note: you may not sum a number with itself.

// Ex: Given the following...

// [1, 3, 8, 2], k = 10, return true (8 + 2)
// [3, 9, 13, 7], k = 8, return false
// [4, 2, 6, 5, 2], k = 4, return true (2 + 2)



let checkTwoSum = (input: number[], k: number): number[] => {

    let output = new Array();

    for(let i = 0; i < input.length; i++){
        if(input.includes(k - input[i]) && input.indexOf(k - input[i])!=i){
            output.push(input[i]);
            output.push(k - input[i]);
            break;
        }
        
    }
    return output;
}

checkTwoSum([1, 3, 8, 2], 10);