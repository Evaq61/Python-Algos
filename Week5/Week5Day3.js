/* 
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */

// get array, of sorted nums
// grab the first num
// check it to following nums
// if first value = next value (pop it out)
// if first value != next value (grab the new value)
// repeate til through array

const nums1 = [1, 1, 1, 2];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

function dedupeSorted(nums) {
    new_arr=[]
    for (i=0; i<nums.length; i++){
        if (nums[i] != new_arr[new_arr.length-1]){
            new_arr.push(nums[i])

        }
    
    }return new_arr
}
console.log(dedupeSorted(nums1))
console.log(dedupeSorted(nums2))
console.log(dedupeSorted(nums3))
console.log(dedupeSorted(nums4))

// ***************************************************************

/* 
Given an array of integers
return the first integer from the array that is not repeated anywhere else
If there are multiple non-repeated integers in the array,
the "first" one will be the one with the lowest index.
*/
/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */

const nums1 = [3, 5, 4, 3, 4, 7, 5, 6];
const expected1 = 6;

const nums2 = [3, 5, 5];
const expected2 = 3;

const nums3 = [3, 3, 5];
const expected3 = 5;

const nums4 = [5];
const expected4 = 5;

const nums5 = [];
const expected5 = null;

function firstNonRepeated(nums) {
    var output = {};
    for (let i = 0; i < nums.length; i++) {
        // console.log(output[arr[i]])
        if (output[nums[i]] == undefined) {
            output[nums[i]] = 1
        } else {
            output[nums[i]] += 1
        }
    }
    for (let i = 0; i < nums.length; i++){
        if (output[nums[i]] == 1){
            return nums[i]
        }
    }
    return null;
}

console.log(firstNonRepeated(nums1))
console.log(firstNonRepeated(nums2))
console.log(firstNonRepeated(nums3))
console.log(firstNonRepeated(nums4))
console.log(firstNonRepeated(nums5))
