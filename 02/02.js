//================================
// DAY X, ADVENT OF CODE 2018
//================================

const day = '02' // Set to day number, e.g. 01

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

    twoCount = 0;
    threeCount = 0;

    idHasCount = (id, count) => {
        for (let i=0; i < id.length; i++) {
            if ((id.split(id[i]).length-1) == count) return true;
        }
        return false;
    }
    
    input.forEach(function(id, i) {
        twoCount+= (idHasCount(id, 2) ? 1 : 0);
        threeCount+= (idHasCount(id, 3) ? 1 : 0);
    })

    return twoCount*threeCount;
    
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

console.log("Your solution for DAY X PART 1 should be... *drumroll*...\n" + part1(inputArray));
console.log("Your solution for DAY X PART 2 should be... *drumroll*...\n" + part2(inputArray));