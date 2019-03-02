// Given two arrays write a function to find out if two arrays have the 
// same frequency of digits
// Examples
let one = [[1,2,3,4], [2,1,3,4]];

function createFrequency(array) {
    let frequencyDict = {};

    // loop through numbers in the array
    for (i = 0; i < array.length; i++) {
        // if num exists in array already...
        // add one to its value
        if (frequencyDict[array[i]]) {
            frequencyDict[array[i]] += 1;
        }
        else {
            // initialize key value pair with value of 1
            frequencyDict[array[i]] = 1;
        };
    };
    // return frequency dictionary for that array
    return frequencyDict;;
}

function compareFrequencies(combinedArray) {
    // if the length of arrays is not the same, returns false right away
    if (combinedArray[0].length != combinedArray[1].length) {
        return false;
    };
    // create frequency dict for first array
    const firstFrequency = createFrequency(combinedArray[0]);
    const secondFrequency = createFrequency(combinedArray[1]);
    // loop through keys in first frequency dict
    for (key in firstFrequency) {
        // if that key does not exist in second frequency dictionary
        if (!secondFrequency[key]) {
            return false;
        };
        // finally if second frequency key's value does not match first frequency
        if (firstFrequency[key] != secondFrequency[key]) {
            return false;
        }
    }
    // if all the above pass, return true. The frequencies match
    return true;
};

console.log(compareFrequencies(one));

