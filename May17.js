// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. 
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Write funciton 
// Create an object to check if the first string is in the other string
function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
    }

    // Given an array of integers and a number, write a function called maxSubarraySum, 
    // which finds the maximum sum of a subarray with the length of the number passed to the function.
    // Note that a subarray must consist of consecutive elements from the original array. 
    // In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

function maxSubarraySum(arr, num){

}