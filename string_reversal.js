/*
 *  Reverse a string
 *
 *  1st solution: Make use of 'Array' object built-in methods. 
 * 
 *  2nd solution: Iterate from the end all the way to the start.
 * 
 *  3rd solution: Using 'for of' loop
 * 
 *  4th solution: Recursion
 * 
 *  5th solution: Reduce method (method executes a provided function for each value of the array, from left-to-right.)
 */

// 1st solution: Make use of 'Array' object built-in methods.
const reverse_1 = string => string.split("").reverse().join("");


// 2nd solution: Iterate from the end all the way to the start.
const reverse_2 = string => {
    let ret = "";
    for(var i = string.length; i >= 0; i--){
        ret = ret + string.charAt(i);
    }
    return ret;
}


// 3rd solution: Using 'for of' loop
const reverse_3 = string => {
    let ret = "";
    for(let c of string){
        ret = c + ret;
    }
    return ret;
}


// 4th solution: Recursion
const reverse_4 = string => {
    if (string === "") 
        return "";
    else
        return reverse_4(string.substr(1)) + string.charAt(0);
}


//4th alternative, with ternary
const reverse_4_1 = string => (string === "") ? "" : reverse_4(string.substr(1)) + string.charAt(0);


// 5th solution: Reduce method (method executes a provided function for each value of the array, from left-to-right.)
const reverse_5 = string => {
    return string.split("").reduce((res, char) => char + res);
}



//Try them

let words = ["Hello pal!", "photosynthesis", "Green Bird", "54321"];

for(const [i, word] of words.entries()){
    console.log("Solution 1: " + reverse_1(word));
    console.log("Solution 2: " + reverse_2(word));
    console.log("Solution 3: " + reverse_3(word));
    console.log("Solution 4: " + reverse_4(word));
    console.log("Solution 4.1: " + reverse_4_1(word));
    console.log("Solution 5: " + reverse_5(word));
}