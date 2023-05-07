// Daily Algos
// ALL EXAMPLES OF MULTIPLE POINTERS

// Write a function called sumZero which accepts a sorted array of intergers
// The function should find the first pair where the sum is equal to 0
//Return an array that includes both values that sum to zero or undefined if the pair does not exist


// Simple version
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if( arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}
console.log(sumZero([1,2,0,-1]))

//Refactored version
function sumZero(arr){
    // First pointer
    let left = 0;
    // Second Pointer
    let right = arr.length - 1;

    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0 ){
            return [arr[left]], arr[right];
        } else if(sum > 0){
            right--;
        }else {
            left++;
        }
    }

}
console.log(sumZero([1,2,0,-1]))

// Impliment a function called countUniqueValues, which accepts a sorted array, and counts
// the unique values in the array 

function countUniqueValues(arr){
    var i = 0;
    if(arr.length == 0) return 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}


console.log(countUniqueValues([1,1,3,4]))



function maxSubarraySum(arr, num) {
    // checks if the value of num is greater than the length of the array. If it is, it means there are not enough elements in the array to form a subarray of size num, so the function returns null.
if ( num > arr.length){
    return null;
}
var max = -Infinity;
for (let i = 0; i < arr.length - num + 1; i ++){
    temp = 0;
    for (let j = 0; j < num; j++){
    temp += arr[i + j];
    }
    if (temp > max) {
    max = temp;
    }
}
return max;
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))

