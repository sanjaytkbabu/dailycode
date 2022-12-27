// This question is asked by Google. Given two integer arrays, return their intersection.
// Note: the intersection is the set of elements that are common to both arrays.

// Ex: Given the following arrays...

// nums1 = [2, 4, 4, 2], nums2 = [2, 4], return [2, 4]
// nums1 = [1, 2, 3, 3], nums2 = [3, 3], return [3]
// nums1 = [2, 4, 6, 8], nums2 = [1, 3, 5, 7], return []


function findIntersection(num1: number[], num2: number[]): number[] {

    let result = Array();

    for(let i = 0; i < num2.length; i++){
        if(num1.includes(num2[i]) && !result.includes(num2[i]))
        result.push(num2[i]);
    }

    return result;
}

let num1: number[][] = [[2, 4, 4, 2], [1, 2, 3, 3], [2, 4, 6, 8]];
let num2: number[][] = [[2, 4], [3, 3], [1, 3, 5, 7]];

console.log(findIntersection(num1[2], num2[2] ).toString());

// let a: number[][];

// a = [[1,2], [3,4]];

// a.push([1,2], [3,4]);

//a[0][0] = 1;

