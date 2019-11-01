/*
 * Check if two string are anagrams one another, means they contain the same number of characters,
 * in such a way that if you reorder the char from a string you can obtain the other and vice versa.
 * 
 * clue: We need to adjust the string removing capital letters, punctuation, etc. Since this not part
 *       of the problem we are going to use a single function to do that.
 *
 * 1st Solution: sort the two arrays and check if they are equal.
 *  
 * 2st Solution: map the characters for each string, than compare the two maps
 * 
 *
 */ 


// clue: We need to adjust the string removing capital letters, punctuation, etc. Since this not part
//       of the problem we are going to use a single function to do that.
 const cleaner = string => {
    var regex = /[a-z0-9]/g; 
    return string.toLowerCase().match(regex).join("");
}


//1st Solution: sort the two arrays and check if they are equal.
const anagrams_1 = (s1, s2) => 
    cleaner(s1).split('').sort().join("") === cleaner(s2).split('').sort().join("");


//2st Solution: map the characters for each string, than compare the two maps
const anagrams_2 = (s1, s2) =>{
    let s1_map = {}
    let s2_map = {}
    for(let c of cleaner(s1)){
        s1_map[c] = s1_map[c] +1 || 1
    }
    for(let c of cleaner(s2)){
        s2_map[c] = s2_map[c] +1 || 1
    }
    if(s1_map.size !== s2_map.size) 
        return false;
    for(let c in s1_map){
        if(s1_map[c] !== s2_map[c]) 
            return false;
    }
    return true;
}




let phrases_couple = [
    ["A man, a plan, a canal, Panama!", "A plan, A man, Panama, a canal,!" ], 
    ["Do not do it, it is impossible", "Do it, it is not impossible"],
    [ "Was it a car or a cat I saw?", "you're blind I guess"], 
    ["54321", "12435"], 
    ["101", "3984723098472309482370948237094827309487230498237049"]
];



for(const [i, phrase] of phrases_couple.entries()){
    console.log(phrase[0] + ": ", phrase[1]);
    console.log(" - Solution 1: " + anagrams_1(phrase[0], phrase[1]));
    console.log(" - Solution 2: " + anagrams_2(phrase[0], phrase[1]));
    
}