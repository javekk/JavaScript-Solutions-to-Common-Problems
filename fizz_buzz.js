/*
 * Given a number as an input, print out every integer from 1 to that 
 * number. However, when the integer is divisible by 2, print out
 * “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s 
 * divisible by both 2 and 3, print out “Fizz Buzz”.
 * 
 * 1st Solution: Using module operator (%) and a 'for' loop
 * 
 * 2nd Solution: Recursion
 * 
 */


// 1st Solution: Using module operator (%) and a 'for' loop
const fizz_buzz_1 = integer => {
    let ret = [];
    for (let i = 1; i <= integer; i++) {
        if (i % 6 === 0) ret.push("Fizz Buzz");
        else if (i % 2 === 0) ret.push("Fizz");
        else if (i % 3 === 0) ret.push("Buzz");
        else ret.push(i);
    }
    return ret;
};


// 2nd Solution: Recursion
const fizz_buzz_2 = integer => {
    const fizz_buzz_rev = integer => {
        let ret = [];
        if(integer === 1){
            return '1';
        }
        else{
            if (integer % 6 === 0) ret.push("Fizz Buzz");
            else if (integer % 2 === 0) ret.push("Fizz");
            else if (integer % 3 === 0) ret.push("Buzz");
            else ret.push(integer);
            return ret.concat(fizz_buzz_rev(integer - 1));
        }
    }
    return fizz_buzz_rev(integer).reverse();
};


//Try them

let integers = [13, 21, 2, 9, 99];

for(const [i, integer] of integers.entries()){
    console.log("Solution 1: " + fizz_buzz_1(integer));
    console.log("Solution 2: " + fizz_buzz_2(integer));
}