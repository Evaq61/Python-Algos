/* 
  Recursively sum an arr of ints
*/

const nums1 = [];
const expected1 = 6;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */

function sumArr(nums, i=0) {
    // edge cases
    if (nums.length <1){
        return false
    }

    // base case -> our ending conclusion
    if (i === nums.length-1){
        return nums[i]
    }

    // recursive statement
    return sumArr(nums, i+1) + nums[i]
}

console.log(sumArr(nums1));

// ******************************************

/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const two_num1 = 5;
const two_expected1 = 15;
// Explanation: (1+2+3+4+5)

const two_num2 = 2.5;
const two_expected2 = 3;
// Explanation: (1+2)

const two_num3 = -1;
const two_expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num) {
    if (num < 0){
        return 0;
    }
}