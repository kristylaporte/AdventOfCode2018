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
    
    // For each ID, compare to each other ID. If one other ID differs from current ID by exactly one character (in same position), then the the ID with that character removed is your final solution.
    let result = null;

    for (let i=0; i < input.length; i++) {
        let id = input[i];
        for (let j=0; j < input.length; j++) {
            let secondId = input[j];
            let mismatchCount = 0;
            let lastMismatchedPos = 0;
            for (let k=0; k < secondId.length; k++) {
                if (id[k] !== secondId[k]) {
                    mismatchCount++
                    lastMismatchedPos = k; // mismatched char in current id
                }
            }
            if (mismatchCount == 1) { 
                result = id.slice(0, lastMismatchedPos) + id.slice(lastMismatchedPos+1, id.length);
            }
        };
    };

    return result;

};

//================================
// OUTPUTTING SOLUTIONS
//================================

console.log("Your solution for DAY X PART 1 should be... *drumroll*...\n" + part1(inputArray));
console.log("Your solution for DAY X PART 2 should be... *drumroll*...\n" + part2(inputArray));