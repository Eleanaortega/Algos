// Daily Algos

//Write a function which takes in a string and returns counts of each character in the string


function charCount(str){
    // Make an object to return at the end
        var obj = {}
    // Look over the string for each character
        for(var i = 0; i < str.length; i++){
    // if number/letter is a key in object add one
        char = str[i].toLowerCase();
        // if number/letter is not a key in object set value to one
        if(/[a-z0-9]/.test(char)){
            if (obj[char] > 0) {
                obj[char]++;
            }else {
                obj[char] = 1;
            }
        }
        }
    // if space or special characters don't do anything 
    // return object
    return obj;

}

charCount('hello')

//--------------------------------------------------------------------------------------------------------------------------------------------------


// Write a function called same, which accepts two arrays. 
// The function should return true if every value in the array has it's corresponding value squared in the second array
// The frequency of values must be the same

function same(arr1, arr2) {
    // Check if array lengths are the same
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i = 0; i < arr1.length; i++){
        // finding the index of the value of arr1[i] squared in the second array
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        console.log("correctIndex:", correctIndex )
        // checks if the current element squared arr1[i] ** 2 is not present in the second array arr2
        if(correctIndex === -1) {
            return false;
        }
        // Removes the value at CorrectIndex, 1 is the amount of values thar are being removed
        arr2.splice(correctIndex,1)
    }
    return true
}

function same(arr1, arr2){
     // Check if array lengths are the same
    if(arr1.length !== arr2.length){
        return false
    }
    // make objects for each array
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // give each key a value
    // (frequencyCounter1[val] || 0) checks if val is already a key
    for ( let val of arr1 ){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1
    }
    for ( let val of arr2 ){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1
    }
    // Next, the function loops over the keys in frequencyCounter1 
    // (which represent the numbers in arr1) and checks whether the squared 
    // value of that key exists in frequencyCounter2 (which represents arr2).
    for(let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false
        }
        // is line of code is checking whether the value of the key squared 
        // in the second array is equal to the value of the key in the first array.
        if (frequencyCounter2[key ** 2 ] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}



console.log(same([1,2,3],[4,1]));

//--------------------------------------------------------------------------------------------------------------------------------------------------

// Given two strings, write a function to determine if the second string 
// is an anagram of the first 

function anagram(str1, str2){
    if(str1.length !== str2.length){
        return false
    }
    // Create object to see how often keys appear
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

  // give each key a value
    // (frequencyCounter1[val] || 0) checks if val is already a key
    for ( let val of str1 ){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1
    }
    for ( let val of str2 ){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)

    for(let key in frequencyCounter1) {
        if(!(key in frequencyCounter2 )){
            return false
        }
        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            false
        }
    }
    return true

}

console.log(anagram("car","rac"))

