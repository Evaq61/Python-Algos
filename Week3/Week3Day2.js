/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

// take an array and a seperator
// create a new empty string
// read the value of each index in the array
// add the value then add the seperator to the new string
// continue through the array and repeat steps
// check for length?
// check for integers, no letters?


function newString(arr, separator){
    var output = ""                       // creates empty new string
    for (let i = 0; i < arr.length; i++){ // goes through array
        output += arr[i];                 // adds the value in array to new string
        if ( i < arr.length -1){          // stops the last seperator from adding at the end of string
          output += separator;            // adds the seperator
        }
    }
    return output;                        // returns new string
}

console.log(newString(arr1, separator1))  // call the function



/**
 * Converts the given array into a string of items separated by the given separator.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string|number|boolean>} arr The items to be joined as a string.
 * @param {string} separator To separate each item of the given arr.
 * @returns {string} The given array items as a string separated by the given separator.
 */
function join(arr, separator) {}

// ***********************************************************

/* 
Book Index
Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/

const two_nums1 = [1, 13, 14, 15, 37, 38, 70];
const two_expected1 = "1, 13-15, 37-38, 70";

const two_nums2 = [1,2,3,4,7,8,9,12,14,20,21];
const two_expected2 = "1-4, 7-9, 12, 14, 20-21";

// const two_nums2 = [-2,-1,2,3];
// const two_expected2 = "(-2)-(-1)";

/**
 * Turns the given arr of page numbers into a string of comma hyphenated
 * page ranges.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Page numbers.
 * @returns {string} The given page numbers as comma separated hyphenated
 *    page ranges.
 */
function bookIndex(nums) {}