/* 
  Given two arrays, interleave them into one new array.
  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
  /**
   * Interleaves two arrays into a new array. Interleaving means alternating
   * the items starting from the first array.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<any>} arr1
   * @param {Array<any>} arr2
   * @returns {Array<any>} A new array of interleaved items.
  */

// given 2 strings
// compare lengths
// loop through the longer one
// make new array
// insert String 1 index THEN String 2 Index
// return new array once done

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];


function interleaveArrays(arr1, arr2) {
    var expected = []
    var bigArray = arr1
    var smallArray = arr2
    if (bigArray < smallArray) {
        bigArray = arr2;
        smallArray = arr1;
    }
    for (let i = 0; i < bigArray.length; i++) {
        expected.push(bigArray[i]);
        if (smallArray[i] != undefined) {
            expected.push(smallArray[i]);
        }
    }
    return expected
}
console.log(interleaveArrays(arrA1, arrB1))
console.log(interleaveArrays(arrA2, arrB2))
console.log(interleaveArrays(arrA3, arrB3))
console.log(interleaveArrays(arrA4, arrB4))

/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
  Bonus (alumni interview): 
  first complete it without the bonus, because they ask for additions
  after the initial algo is complete
  return how many times the given number occurs
  
  /**
   * Efficiently determines if the given num exists in the given array.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<number>} sortedNums
   * @param {number} searchNum
   * @returns {boolean} Whether the given num exists in the given array.
  */

// given array (ordered nums)
// check middle first for search num
// "Is search less than middle num"
// Search num is < "middle num" go left
// search num is > "middle num" go right
// continue through until you find Seearch num, return true
// or return false

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;

function binarySearch(list, searchNum) {
    mid =Math.floor(list.length/2)
    for (let i = mid; i < list.length; i++){
        console.log(list[i])
    }
}

console.log(binarySearch(nums2, searchNum2))