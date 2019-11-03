/*
 * Count all the vowel in a string.
 *
 * 1st Solution: using the built-in function match, with regEx
 * 
 * 2nd Solution: using the built-in function includes, without regEx
 * 
 * 3rd Solution: using the built-in function filter and include
 * 
 * 4st Solution: 
 *
 */


// 1st Solution: using the built-in function matches, with regEx
const vowelCounter_1 = string => 
    string.match(/[aeiou]/gi) ? string.match(/[aeiou]/gi).length : 0;


// 2nd Solution: using the built-in function includes, without regEx
const vowelCounter_2 = string =>{
    let counter = 0;
    for(let c of string.toLowerCase()){
        if('aeiou'.includes(c))
            counter++;
    }
    return counter;
}

// 3rd Solution: using the built-in function filter and include
const vowelCounter_3 = string =>
    string.toLowerCase().split("").filter(c => 'aeiou'.includes(c)).length;


// 4th Solution: 


//Try them

let strings = ["Hello pal!", "phOtosynthesis", "Green Bird", "54321"];

for(const [i, s] of strings.entries()){
    console.log("Solution 1: " + vowelCounter_1(s));
    console.log("Solution 2: " + vowelCounter_2(s));
    console.log("Solution 3: " + vowelCounter_3(s));
}