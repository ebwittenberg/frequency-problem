# Given two arrays write a function to find out if two arrays have the 
# same frequency of digits
# Examples
one = [[1,2,3,4], [1,2,3,4]]
# [1,2,3,4], [1,4,5,6] = two
# [1,2,3,4], [1,4,4,2] = three
# [1,2,3,4], [1,4,3,2] = four
# [1,2,3,4,5], [1,2,3,4] = five

# Create frequency dictionary for first array

# loop through numbers in the array
def create_frequency(array):

    frequency_dict = {}

    # loop through numbers in the array
    for num in array:
        # if num exists in array already, add one to its value, else create key value pair with value set to 1
        if num in frequency_dict:
            frequency_dict[num] += 1
        else:
            frequency_dict[num] = 1


    # return the frequency dictionary for that array
    return frequency_dict

def compare_frequencies(combined_array):

    if len(combined_array[0]) != len(combined_array[1]):
        return False
    # create frequency dict for first array
    first_frequency = create_frequency(combined_array[0])
    # create frequency dict for second array
    second_frequency = create_frequency(combined_array[1])

    # loop through keys in the first frequency dict
    for key in first_frequency:
        # if that key doesn't exist in second frequency dict, return False
        try:
            if second_frequency[key]:
                pass
        except:
            return False
        # if key does exist in second frequency, check that the values match
        if first_frequency[key] != second_frequency[key]:
            return False
    # if all of the above do not evaluate to false, return True
    return True


print((compare_frequencies(one)))



