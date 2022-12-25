// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

//  

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.


// function merge(nums1: number[], m: number, nums2: number[], n: number): void {

// let output = Array();
// let z =0;

// let i = 0;
// let j=0, k=0;
//     // for (i = 0; i < m && i < n; i++){
//     //     if(nums1[j] < nums2[k])
//     //     {
//     //         output[z] = nums1[j];
//     //         j++;
//     //     }
        
//     //     else
//     //     {output[z] = nums2[k];
//     //         k++;
//     //     }
        
//     //     z++;
//     // }

//     while(j<m && k<n){
//          if(nums1[j] < nums2[k])
//         {
//             output[z] = nums1[j];
//             j++;
//         }
        
//         else
//         {output[z] = nums2[k];
//             k++;
//         }
        
//         z++;
//     }




//         while(j<m)
//         {  
//             output[z] = nums1[j];
//             z++;j++;
//         }
    

//         while(k<n)
//         {
//             output[z] = nums2[k];
//             z++;k++;
//         }


// nums1 = output;

// console.log(nums1.toString());
// };


//let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
// let nums1 = [1], m = 1, nums2 = [], n = 0;
// merge(nums1, m, nums2, n);




function functionMergeWithOneLiner(nums1: number[], m: number, nums2: number[], n: number): void {
    while(n>0) nums1[m+n-1] = (m==0||nums2[n-1] > nums1[m-1]) ? nums2[--n] : nums1[--m];
    
    };

    function merge(nums1: number[], m: number, nums2: number[], n: number): void {
        
        for (let i = n+m-1; i>=0; i--){

            if(m==0){
                nums1[i] = nums2[--n]; 
            }
            else if (n==0){
                nums1[i] = nums1[--m];
            }
            else if (nums1[m-1] > nums2[n-1]){
                nums1[i] = nums1[--m];
            }
            else {
                nums1[i] = nums2[--n];
            }

        }

        console.log(nums1.toString())
        
        };

        //let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
        //let nums1 = [1], m = 1, nums2: number[] = [], n = 0;
        let nums1 = [0], m = 0, nums2 = [1], n = 1;
        merge(nums1, m, nums2, n);