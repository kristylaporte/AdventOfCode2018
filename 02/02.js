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
    idHasTwo = id => {
        // Just need to see if id (str) contains any character exactly twice. (Doesn't matter how MANY appear exactly twice, just if at least one does or not.)
        for (let i=0; i < id.length; i++) {
            if ((id.split(id[i]).length-1) == 2) return true;
        }
        return false;
    }

    idHasThree = id => {
        // Just need to see if id (str) contains any character exactly thrice. (Doesn't matter how MANY appear exactly twice, just if at least one does or not.)
        for (let i=0; i < id.length; i++) {
            if ((id.split(id[i]).length-1) == 3) return true;
        }
        return false;
    }
    
    input.forEach(function(id, i) {
        twoCount+= (idHasTwo(id) ? 1 : 0);
        threeCount+= (idHasThree(id) ? 1 : 0);
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