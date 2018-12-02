const fs = require('fs');

module.exports = {

    getInput: day => { // Pass puzzle day number as string that matches directory, e.g. '01'
        try {
            // Use node.js's filesync module to get the input from external file (pathing may sometimes need adjustment depending on OS):
           return fs.readFileSync(__dirname+'/'+day+'/'+day+'-input.txt', 'utf8'); 
        } catch (error) {
            console.log('Error: ', error.stack)
        }
    },
    breakLines: data => {
        // Create array of input data by splitting input on new lines (regardless of current os or input's original filesystem, hopefully):
        return data.split(/[\r\n]+/); 
    },
    log: data => {
        // For dumping our input (e.g. if we need to test our breakLines result):
        console.log('===========================')
        console.log('BEGIN INPUT DUMP: ')
        console.log('---------------------------')
        console.log(data);
        console.log('END INPUT DUMP')
        console.log('===========================')
    }
}