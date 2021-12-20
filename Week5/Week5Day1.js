/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/
/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */

// get an array
// check array length > 2
// check front with back
// see if equal
// when equal look for balance index

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [-2, 5, 0, 7, 0, 3];
const expected3 = 3;

const nums4 = [-2, 5, 7, 5, 3];
const expected4 = -1;

function balanceIndex(nums) {
    if (nums.length < 3) { 
        return -1
    }
    var left = 0
    var right = nums.length-1
    var leftSum=nums[left]
    var rightSum=nums[right]
    while (left < right){ 
        if (leftSum === rightSum) {
            left++;
            right --;
            leftSum += nums[left];
            rightSum += nums[right];
        }
        else if (leftSum < rightSum) {
            left++;
            leftSum += nums[left];
        }
        else if (leftSum > rightSum){
            right--;
            rightSum += nums[right]
        }
    }
    if (leftSum === rightSum) {
        if (left === right){
            return left
        } else {
            return -1
        }
    }
    else {
        return -1
    }
}
console.log(balanceIndex(nums1))
console.log(balanceIndex(nums2))
console.log(balanceIndex(nums3))
console.log(balanceIndex(nums4))


// *********************************************************************


/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visited indexes).
*/
/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */


const array1 = [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const array2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;


function socialDistancingEnforcer(array, num_dist) {
    let count = 0;
    let foundIt = false
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 1) {
            if (count < num_dist && foundIt ) {
                return false
            }
            count = 0;
            foundIt = true

        }
        count++
    }
    return true
}

console.log(socialDistancingEnforcer(array1, 6))
console.log(socialDistancingEnforcer(array2, 6))
