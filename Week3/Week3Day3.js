/* 
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive letters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

// write function
// loop through string
// check "value"/character
// adding a count for each repetive one
// if next charact is different THEN push value and count of prvious char in new string
// loop through until end of string
// check lengths print larger one if new string > original renturn new, otherwise print old
// call the function

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str5 = "aaaabbcdddaaa";
const expected5 = "a4b2c1d3a3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

//Tyler's code
function encode1(str){
    if (str.length <= 2){
        return str
    }

    let encode = ""
    let currChar = str[0]
    let currCharCount = 0

    for (let i = 0; i < str.length; i++){
        if (str[i] === currChar){
            currCharCount++
        }
        if (str[i] !== currChar || i === str.length-1){ // || = OR
            encode += currChar + currCharCount
            currChar = str[i]  // at this point we reached the next letter
            currCharCount = 1
        }
    }
    //                     condition ? if true : if false
    return encode.length < str.length ? encode : str 
}

console.log(encode1(str4))
// Tyler's Code ^^^^^^


function encode(someString){
    newString = "";
    for (var i = 0; i < someString.length; i++){
        var count = 1;
        while (someString[i] == someString[i+1]){
            count += 1;
            i++;
        }
        newString += someString[i] + count;
    }
    if (newString.length < someString.length){
        return newString;
    }
    else{
        return someString;
    }
    
}
console.log(encode(str2))
console.log(encode(str4))
console.log(encode(str5))



        // console.log(someString[i]);
// encode (str1);


  /**
   * Encodes the given string such that duplicate characters appear once followed
   * by a number representing how many times the char occurs only if the
   * character occurs more than two time.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str The string to encode.
   * @returns {string} The given string encoded.
   */
  function encodeStr(str) {}

//   *****************************************************************************

/* 
  String Decode  
*/

// write function
// loop through string
// check "value"/character
// see when strings hit number see when next letter appears (to get numbers like 10)
// string say 3 print 3 a(s)
// if next charact is different THEN push value and count of prvious char in new string
// loop through until end of string
// check lengths print larger one if new string > original renturn new, otherwise print old
// call the function


// not finished!!!!!!

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

function encode(someString){
    var newString = "";
    for (var i = 0; i < someString.length; i++){
        var count = 1; //uncess
        while (someString[i] === a){
            count += 1;
            // console.log(count);
            i++;
        }
        newString += someString[i] + count;
    }
    if (newString.length < someString.length){
        return newString;
    }
    else{
        return someString;
    }
    
}
console.log(encode(str2))
console.log(encode(str4))
console.log(encode(str5))

//Tyler's Code
function decodeStr(str) {
    let decoded = "";
    let i = 0;

    while (i < str.length) {
      // Retrieve letter at current index then increment to the num after.
    let char = str[i++];
    let numStr = "";

    /**
       * Look ahead to find potentially multiple digits after letter.
       * parseInt returns NaN if it fails to parse to a number.
       * We can't simply check for a truthy parsed int because 0 is falsy.
       * We can't use typeof because typeof NaN is "number". This is why we use
       * not Not a Number to check if we parsed a number.
       */
    while (i < str.length && !isNaN(parseInt(str[i]))) {
        // concatenate the string digit then increment.
        numStr += str[i++];
    }

    decoded += char.repeat(numStr);
    }
    return decoded;
}
// Tyler's Code ^^^^^^^^^^


/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {}