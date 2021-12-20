/* 
    String: Rotate String

    Create a standalone function that accepts a string and an integer,
    and rotates the characters in the string to the right by that given
    integer amount.
*/



/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

/**
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @param {number} amnt The amount of characters in the given str to rotate to the
 *    right.
 * @returns {string} The string rotated by the given amount.
 */

// get a string with a counter
// rotate the string by the counter
// grab the first character and push to the back
// if ratate amount > string length (rotate amount % str.length)

// create a new empty string
// use the rotate count to grab from back
//push the grab into new string
// grab the rest and push into string

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";
// 

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";

// BONUS
const rotateAmnt6 = -2;
const expected6 = "llo WorldHe"

function rotateStr(str, amnt) { 
    var newStr = "";

    if (amnt > str.length){
        amnt = amnt % str.length;
    }
    if (amnt < 0){
        amnt = amnt + str.length
    }
    for (let i = str.length - amnt; i < str.length; i++){
        // console.log(str[i]);
        newStr += str[i];
    }
    for (let j = 0; j < str.length - amnt; j++){
        newStr += str[j];
    }
    return newStr;
}

console.log(rotateStr(str, rotateAmnt1))
console.log(rotateStr(str, rotateAmnt2))
console.log(rotateStr(str, rotateAmnt3))
console.log(rotateStr(str, rotateAmnt4))
console.log(rotateStr(str, rotateAmnt5))
console.log(rotateStr(str, rotateAmnt6))







/* 
    Create the function isRotation(str1,str2) that
    returns whether the second string is a rotation of the first.
*/

const strA1 = "ABCD";
const strB1 = "CDAB";
const two_expected1 = true;
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated

const strA2 = "ABCD";
const strB2 = "CDBA";
const two_expected2 = false;
// Explanation: all same letters in 2nd string, but out of order

/**
 * Determines whether the second string is a rotated version of the first.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether the second string is a rotated version of the 1st.
 */

// check if length of strings are uneven OR if the string are exactly the same (no rotation)
//return false
// combine/double string 1 ABCD -> ABCDABCD
// check if ABCDABCD has string 2 (CDAB) is within the combined string
// return true or false

function isRotation(s1, s2) {

    if (s1.length !== s2.length || s1 === s2){
        return false;
    }
    // So the string repeats (ABCDABCD)
    let combined = s1 + s1;
    // console.log(combined);

    // does ABCDABCD have CDAB?
    return combined.includes(s2);
}

console.log(isRotation(strA1,strB1))
console.log(isRotation(strA2,strB2))