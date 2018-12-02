//================================
// DAY 1, ADVENT OF CODE 2018
//================================

const day = '01'

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
    let freq = 0;
    input.forEach(function(adjustment, i) {
        adjustment = Number(adjustment);
        freq = freq+adjustment;
    })
    return freq;
}

//================================
// PART 2
//================================

part2 = input => {
    let freq = 0; // the starting frequency
    let freqsHit = []; // collection of frequencies we hit as we go
    let i = 0; // index for looping
    do {
        // Reset i first if we're up to our input array length, as we may need to loop our array many times
        i = ((i == input.length) ? 0 : i) 
        freq = freq + Number(input[i]);
        if (freqsHit.includes(freq)) {
            return freq;
        } else {
            freqsHit.push(freq);
        }
        i++;
    }
    while (true);
}

//================================
// OUTPUTTING SOLUTIONS
//================================

console.log("Your solution for DAY X PART 1 should be... *drumroll*..." + part1(inputArray));
console.log("Your solution for DAY X PART 2 should be... *drumroll*..." + part2(inputArray));