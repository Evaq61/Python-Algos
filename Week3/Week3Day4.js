/* 
String: Is Palindrome
Create a function that returns a boolean whether the string is a strict palindrome. 
- palindrome = string that is same forwards and backwards

Do not ignore spaces, punctuation and capitalization
*/

/*
get a string
loop through it
check first with last
if they match check next set
work inward
return false as soon as they dont match

*/
const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;


function isPalindrome(str){
    j = str.length-1;
    for (var i = 0; i < Math.floor(str.length/2); i++){
        console.log(str[i],str[j]);
        if (str[i] == str[j]){
            // console.log("Test = True");
            j--
        }
        else {
            // console.log("Test = False");
            return false;
        }
    }
    return true;
}

console.log(isPalindrome(str2))

// *****************************************************

/**
 * Determines if the given str is a palindrome (same forwards and backwards).
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str is a palindrome or not.
 */
// function isPalindrome(str) {}

// *******************************************************

/* 
Longest Palindrome
For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 
Strings longer or shorter than complete words are OK.
All the substrings of "abc" are:
a, ab, abc, b, bc, c
*/

// get a string
// create new empty string
// check through the string 
// 

const two_str1 = "what up, daddy-o?";
const two_expected1 = "dad";

const two_str2 = "uh, not much";
const two_expected2 = "u";

const two_str3 = "Yikes! my favorite racecar erupted!";
const two_expected3 = "e racecar e";

const two_str4 = "a1001x20002y5677765z";
const two_expected4 = "5677765";

/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The longest palindromic substring from the given string.
 */

//Still not working

function longestPalindromicSubstring(str) {

    var longest = str[0];
    temp = []
    for(var i=0; i < str.length; i++){

        for(var j=0; j<str.length-i; j++){
            
            for(var k=0; k<=j; k++){
                temp += str[i+k]
            }
            if(isPalindrome(temp)){
                if(temp.length > longest.length){
                    longest = temp;
                }
            }
        }
    }
    return longest;
}

longestPalindromicSubstring(two_str1)
longestPalindromicSubstring(two_str2)
longestPalindromicSubstring(two_str3)
longestPalindromicSubstring(two_str4)