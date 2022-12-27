// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

//  

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

//  

// Constraints:

//     1 <= nums1.length, nums2.length <= 1000
//     0 <= nums1[i], nums2[i] <= 1000

function intersect(nums1: number[], nums2: number[]): number[] {

    let output = new Array();
    let index = null;

    for(let i = 0; i < nums1.length; i++){
        index = nums2.indexOf(nums1[i]);
        if(index!=-1){
        output.push(nums1[i]);
        delete nums2[index];
        }
    }

    return output;
};

let nums1 = [1,2,2,1], nums2 = [2];
//let nums1 = [4,9,5], nums2 = [9,4,9,8,4];
let output = intersect(nums1, nums2);


//console.log(nums1.join());

console.log(output);

export {};