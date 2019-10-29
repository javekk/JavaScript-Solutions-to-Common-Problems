/*
 * Return the character with the highest number of occurances in a string. 
 * or better, Given a string of characters, return the character that appears the most often.
 * 
 * 1st Solution:Use an array to keep track of the occurencies then,
 *              scan the string char by char, if you find a new character add, if the char
 *              is already there, then do +1
 * 
 * 2nd Solution: one-loop-only, every time we update the character which appers the most
 * 
 * 3rd Solution: use some built-in functions, split and foreach
 * 
 */


// 1st Solution:Use an array to keep track of the occurencies then,
//              scan the string char by char, if you find a new character add, if the char
//              is already there, then do +1
const max_char_1 = string => {
    let char_occs_map = {};
    for(let char of string){
        char_occs_map[char] = char_occs_map[char] + 1 || 1;
    }

    let curMax = '';
    let curMaxOcc = 0;
    for(let char in char_occs_map){
        if(char_occs_map[char] > curMaxOcc){
            curMax = char;
            curMaxOcc = char_occs_map[char];
        }
    }

    return curMax;
}


// 2nd Solution: one-loop-only, every time we update the character which appers the most
const max_char_2 = string =>{
    let char_occs_map = {};
    let curMax = '';
    for(let char of string){
        char_occs_map[char] = char_occs_map[char] + 1 || 1;
        if(curMax === '' || (char_occs_map[char] >= char_occs_map[curMax])) // >= to be consistent to the other solution
            curMax = char;
    }
    return curMax;
}


// 3rd Solution: use some built-in functions, split and foreach. split() will divide 
//               string in n+1 occurerces of that particular char( but we only need
//               the char so is not a problem)
const max_char_3 = string =>{
    let curMax = '';
    let curMaxOcc = 0;
    string.split('').forEach(c => {
        if(string.split(c).length > curMaxOcc){
            curMaxOcc = string.split(c).length;
            curMax = c;
        }
    });
    return curMax;
}




//Try them

let words = ["Hello pal!", "photosynthesis", "Green Bird", "514321"];

for(const [i, word] of words.entries()){
    console.log("Solution 1: " + max_char_1(word));
    console.log("Solution 2: " + max_char_2(word));
    console.log("Solution 3: " + max_char_3(word));
    
}