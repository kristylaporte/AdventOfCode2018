//================================
// DAY X, ADVENT OF CODE 2018
//================================

const day = 'XX' // Set to day number, e.g. 01

//================================
// GET THIS DAY'S INPUT
//================================
// Get input text file (pathing may sometimes need adjustment depending on OS):
const getInput = require(__dirname+'/../'+'get-input.js'); 
// Get raw input value (big string) from the input text file:
let inputRaw = getInput.getInput(day);
// Break input into array of items by splitting on line breaks (may not always need this):
let inputArray = getInput.breakLines(inputRaw); 
//getInput.log(inputArray); 

//================================
// PART 1
//================================

part1 = input => {
    return "\nNo solution yet.";
}

//================================
// PART 2
//================================

part2 = input => {
    return "\nNo solution yet.";
}

//================================
// OUTPUTTING SOLUTIONS
//================================

console.log("Your solution for DAY X PART 1 should be... *drumroll*..." + part1(inputArray));
console.log("Your solution for DAY X PART 2 should be... *drumroll*..." + part2(inputArray));