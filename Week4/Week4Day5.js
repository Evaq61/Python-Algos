/* 
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionaries to represent current inventory,
  update the quantities of the current inventory
  
  if the item doesn't exist in current inventory, add it to the inventory
  return the current inventory after updating it.
*/

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
];
const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];
const expected1 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },
];

const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
const expected2 = [{ name: "Peanut Butter", quantity: 20 }];

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
const currInv3 = [];
const expected3 = [{ name: "Peanut Butter", quantity: 20 }];

/**
 * Updates the current inventory based on the new inventory.
 * - Time: O(?).
 * - Space: O(?).
 * @typedef {Object} Inventory
 * @property {string} Inventory.name The name of the item.
 * @property {number} Inventory.quantity The quantity of the item.
 * @param {Array<Inventory>} newInv A shipment of new inventory.
 *    An array of inventory objects.
 * @param {Array<Inventory>} currInv
 * @return The currInv after being updated.
 */
function updateInventory(newInv, currInv) {

    //Your code here
}

//****************************************************************************************************************************************

/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected4 = "hello world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
function trim(str) {

    //Your code here
}

// ***************************************************************************************************************************************** 
/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected5 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected6 = true;

const strA3 = "no";
const strB3 = "noo";
const expected7 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected8 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */

// check string if same length
// if they are
// make a object of counts
// loop through original string and set letters to a count


function isAnagram(s1, s2) {
    if (s1.length !== s2.length)
        return false
}
var obj = {};
for (let i = 0; i < s1; i++) {

}



function updateInventory(newInv, currInv) {
    let notFound = []
    for (newObj of newInv) {
        console.log(newObj)
        let wasfound = false
        for (currObj of currInv) {
            // console.log(currObj['name'])
            if (newObj['name'] === currObj['name']) {
                // let value =
                currObj['quantity'] += newObj['quantity']
                wasfound = true
                break
            }
        }
        if (wasfound === false) {
            currInv.push(newObj)
        }
    }
    // for(obj of notFound){
    //   currInv.push(obj)
    // }
    return currInv

}

var numberList = [1, 2, 3]

// using "of" gives us the value
for (number of numberList) {
    console.log(number)
    // output gives 1,2,3
}

// using "in" gives you the index
for (number in numberList) {
    console.log(number)
    // output gives 0,1,2
}


js
function isAnagram(s1, s2) {
    if (s1.length !== s2.length) {
        return false
    }
    var obj1 = {};
    var obj2 = {};
    for (let i = 0; i < s1.length; i++) {
        if (obj1[s1[i]] === undefined) {
            obj1[s1[i]] = 1
        } else {
            obj1[s1[i]] += 1
        }
        if (obj2[s2[i]] === undefined) {
            obj2[s2[i]] = 1
        } else {
            obj2[s2[i]] += 1
        }
    }
    for (let j = 0; j < s1.length; j++ ) {
        if (obj1[s1[j]] != obj2[s2[j]]) {
            return false
        }
    }
    return true
}

function updateInventory(newInv, currInv) {
    let newObj = {}
    for (const item of currInv) {
        newObj[item['name']] = item['quantity']
    }
    for (const item of newInv) {
        if (newObj.hasOwnProperty(item['name'])) {
            newObj[item['name']] += item['quantity']
        } else {
            newObj[item['name']] = item['quantity']
        }
    }
    let newList = []
    for (const key in newObj) {
        newList.push([{ 'name': key, 'quantity': newObj[key] }])
    }
    return newList
}


console.log(updateInventory(newInv1, currInv1));