/*
 * Return the character with the highest number of occurances in a string. 
 * or better, Given a string of characters, return the character that appears the most often.
 * 
 * 1st Solution:Use an array to keep track of the occurencies then,
 *              scan the string char by char, if you find a new character add, if the char
 *              is already there, then do +1
 * 
 */


// 1st Solution:Use an array to keep track of the occurencies then,
//              scan the string char by char, if you find a new character add, if the char
//              is already there, then do +1
const max_char = string => {
    let char_occs = {};
    for(let char of string){
        char_occs[char] = char_occs[char] + 1 || 1;
    }

    let curMax = '';
    let curMaxOcc = 0;
    for(let char in char_occs){
        if(char_occs[char] > curMaxOcc){
            curMax = char;
            curMaxOcc = char_occs[char];
        }
    }

    return curMax;

}



//Try them

let words = ["Hello pal!", "photosynthesis", "Green Bird", "514321"];

for(const [i, word] of words.entries()){
    console.log("Solution 1: " + max_char(word));
    
}