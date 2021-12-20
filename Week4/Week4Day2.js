/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

//make function that gets a string
//

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
    stringList = str.split(' ')
    newString = ""

    for (var i = 0; i < stringList.length; i++) {
        for (var j = stringList[i].length - 1; j >= 0; j--) {
            newString += stringList[i][j]
        }
        if (i == stringList.length - 1) {
            return newString
        }
        else {
            newString += " "
        }

    }
    return newString
}

console.log(reverseWords(str3))
/*****************************************************************************/


/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */

function reverseWordOrder(str) {
    var newStr = "";

    for (var i = str.length - 1; i >= 0; i--) {
        if (str[i - 1] === " " || i == 0) {
            for (var j = i; j < str.length; j++) {
                if (str[j] === " ") {
                    break
                }
                newStr += str[j];
            }
            if (i != 0) {
                newStr += " ";
            }
        }
    }
    return newStr
}

console.log(reverseWordOrder(str1))



/*****************************************************************************/