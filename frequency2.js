// Given two arrays write a function to find out if two arrays have the 
// same frequency of digits
// Examples
let one = [[1,2,3,4], [2,1,3,4]];

function create_frequency(array) {
    let frequency_dict = {};

    // loop through numbers in the array
    for (i = 0; i < array.length; i++) {
        // if num exists in array already...
        // add one to its value
        if (frequency_dict[array[i]]) {
            frequency_dict[array[i]] += 1;
        }
        else {
            // initialize key value pair with value of 1
            frequency_dict[array[i]] = 1;
        };
    };
    // return frequency dictionary for that array
    return frequency_dict;;
}

function compare_frequencies(combined_array) {
    // if the length of arrays is not the same, returns false right away
    if (combined_array[0].length != combined_array[1].length) {
        return false;
    };
    // create frequency dict for first array
    const first_frequency = create_frequency(combined_array[0]);
    const second_frequency = create_frequency(combined_array[1]);
    // loop through keys in first frequency dict
    for (key in first_frequency) {
        // if that key does not exist in second frequency dictionary
        if (!second_frequency[key]) {
            return false;
        };
        // finally if second frequency key's value does not match first frequency
        if (first_frequency[key] != second_frequency[key]) {
            return false;
        }
    }
    // if all the above pass, return true. The frequencies match
    return true;
};

console.log(compare_frequencies(one));

