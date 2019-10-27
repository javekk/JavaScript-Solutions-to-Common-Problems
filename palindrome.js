/*
 * Check if a String is palindrome.
 * A palindrome is a word, number, phrase, or other sequence of characters which reads the
 * same backward as forward, such as 'taco cat' or 'madam' or 'racecar' or the number '10801'. 
 * Sentence-length palindromes may be written when allowances are made for adjustments to 
 * capital letters, punctuation, and word dividers, such as "A man, a plan, a canal, Panama!", 
 * "Was it a car or a cat I saw?" or "No 'x' in Nixon". 
 * 
 * clue: We need to adjust the string removing capital letters, punctuation, etc. Since this not part
 *       of the problem we are going to use a single function to do that.
 * 
 * 1st Solution: We using a 'for' loop, we compare the first char with the last one.
 * 
 * 2nd Solution: Reverse the string and check if its match with the original one.
 * 
 * 3rd Solution: Similar to the first, but using 'every' method.
 * 
 * 4th Solution: Recursion.
 */


 // clue: We need to adjust the string removing capital letters, punctuation, etc. Since this not part
 //       of the problem we are going to use a single function to do that.
const cleaner = string => {
    var regex = /[a-z0-9]/g; 
    return string.toLowerCase().match(regex).join("");
}


 //1st Solution: using a 'for' loop, we compare the first char with the last one, returning false if the
 //              characters do not match. Return true if all of them match.
const isPalindrome_1 = string => {
    string = cleaner(string);
    for(var i = 0; i < string.length/2; i++){
        if(string.charAt(i) !== string.charAt(string.length -i -1))
            return false;
    }
    return true;
}


// 2nd Solution: Reverse the string and check if its match with the original one
const isPalindrome_2 = string => {
    string = cleaner(string);
    reversed = string.split("").reverse().join("");
    return string === reversed;
}


// 3rd Solution: Similar to the second, but using 'every' method.
const isPalindrome_3 = string => {
    string = cleaner(string);
    return string.split("").every((character, index) => character === string[string.length - index - 1]);
}


// 4th Solution: Recursion.
const isPalindrome_4 = string => {
    string = cleaner(string); // Would be better to put this outside, but meh
    if(string.length === 0 || string.length === 1)
        return true;
    if(string.charAt(0) === string.charAt(string.length -1))
        return isPalindrome_4(string.slice(1, string.length -1));
    return false;
}


//try them 
let phrases = ["A man, a plan, a canal, Panama!", "I topi non avevano nipoti", "Was it a car or a cat I saw?", "54321", "101"];

for(const [i, phrase] of phrases.entries()){
    console.log(phrase + ": ");
    console.log(" - Solution 1: " + isPalindrome_1(phrase));
    console.log(" - Solution 2: " + isPalindrome_2(phrase));
    console.log(" - Solution 3: " + isPalindrome_3(phrase));
    console.log(" - Solution 4: " + isPalindrome_4(phrase));
}