// Given an integer array nums, find the
// subarray
// which has the largest sum and return its sum.

//  

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:

// Input: nums = [1]
// Output: 1

// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23

//  

// Constraints:

//     1 <= nums.length <= 105
//     -104 <= nums[i] <= 104

let nums = [-2,1,-3,4,-1,2,1,-5,4];
function maxSubArray(nums: number[]): number {
    let max = nums[0];
    let ptr = 1, curSum = nums[0];
    while (ptr<nums.length){

        curSum+= nums[ptr];
        max = curSum>max?curSum:max;
        curSum = curSum<0?0:curSum;
        if(nums[ptr] > max){
            max = nums[ptr];
            curSum = nums[ptr]
        }
        
        ptr++;
    }
    return max;
};

console.log(maxSubArray(nums).toString());