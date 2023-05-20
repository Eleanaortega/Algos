// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.

var groupAnagrams = function(strs) {
    // Create an array that maaps through each word in strs and created
    // A new array called sorrtedStrs which has each word with the letters in alphabetical order
    const sortedStrs = strs.map(word => word.split('').sort().join(''));
    // create an obj that tracks the anagrams
    const hash = {};
    
    // loop through the words in strs array
    for (var i = 0; i < strs.length; i++) {
        // iterate through each word and check if sortedstr is an exsisting key in the hash object 
        if (!hash[sortedStrs[i]]) {
            // If not create new key that contains the word that is being iterated
            hash[sortedStrs[i]] = [strs[i]];
        } else {
            hash[sortedStrs[i]].push(strs[i]);
        }
    }

    return Object.values(hash);
};


// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
var topKFrequent = function(nums, k) {
    // Checks if the length of the array is more than the given integer
    if(nums < k) return null;
    // create an obj that tracks the frequency of each number
    const hash = {}
    // loop through the array to check how many times it appears
    for (var i = 0; i < nums.length; i++)
        if(!hash[nums[i]]){
            hash[nums[i]] = 1
        }else {
            hash[nums[i]] += 1
        }
        // converts the hash object into an array of key-value pairs.
        const sortedArray = Object.entries(hash).sort((a, b) => b[1] - a[1]);

        const topK = sortedArray.slice(0, k).map(([key, _]) => Number(key));
        console.log(topK)
    // return topK
};

topKFrequent([5,1,1,2,2,3],2)