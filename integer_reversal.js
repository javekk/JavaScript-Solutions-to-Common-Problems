/*
 * Interger reverse. For example "1234" becomes "4321", "-10" becomes "-1"
 *
 * 1st Solution: Convert it to a string, then it becomes a string reverse problem, 
 *               see the other file....
 * 
 * 2st Solution: Removing the last digit, increse the result order of magnitude and 
 *               add this digit, then remove it from the oringinal number.
 * 
 */


// 1st Solution: Convert it to a string, then it becomes a string reverse problem, 
//               see the other file....
const reverse_1 = integer =>
     parseInt(
         integer.toString().split("").reverse().join("")
     ) * Math.sign(integer);


// 2st Solution: Removing the last digit, increse the result order of magnitude and 
//               add this digit, then remove it from the oringinal number.
const reverse_2 = integer => {
    let ret = 0;
    while(integer){
        digit = integer % 10; // get the last digit
        ret = (ret * 10) + digit;
        integer = integer/10|0;
    }
    return ret;
}




//Try them

let integers = [1213, -2132, 22, 907083, -10000];

for(const [i, integer] of integers.entries()){
    console.log("Solution 1: " + reverse_1(integer));
    console.log("Solution 2: " + reverse_2(integer));
}