// FREQUENCY COUNTER

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.\
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false

function sameFrequency(int1, int2){

        int1 = int1.toString()
        int2 = int2.toString()
        console.log(int1)

    if(int1.length !== int2.length){
        return false;
    } 
    // Create frequency counter
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // checks if value is present 
    for( let val of int1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1
    }
for( let val in int2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    // Check if they have the same frequency
    // iterate over frequency counter 1
    // for each key in frequency counter 1
    for(let key in frequencyCounter1) {
        if(!(key in frequencyCounter2 )){
            return false
        }
        // If the value (how frequent the number is) is not the same
        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            return false
        }
        return true
    }
}
// sameFrequency(123,234)




// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
//  and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// Frequency Counter
function areThereDuplicates(){
    // Make sure I can iterate 
    let obj = {}
    for( let val of arguments){
        obj[arguments[val]] = (obj[arguments[val]] || 0) + 1
    }
    console.log(obj)
    for(let key in obj){
        if(obj[key] > 1) return true
    }
    return false;
    }


console.log(areThereDuplicates(2,2,3,4))


// Using multiple pointers

function areThereDuplicates(...args) {
// Two pointers
// Sort input
args.sort((a,b) => a > b);
console.log(args.sort((a,b) => a > b))
// declare pointers
let start = 0;
let next = 1;
while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
}
return false
}
console.log(areThereDuplicates(2,2,3,4))


// Write a function called averagePair. Given a sorted array of integers and a target average, 
// determine if there is a pair of values in the array where the average of the pair equals the 
// target average. There may be more than one pair that matches the average target
function averagePair(arr, target) {
    arr = arr.sort((a, b) => a - b);
    console.log(arr);
    let left = 0;
    let right = 1;

    while (right < arr.length) {
    let avg = (arr[left] + arr[right]) / 2;
    console.log(avg);
    if (avg === target) {
        return true;
    }
    left++;
    right++;
    }

return false;
}

console.log(averagePair([-1,0,3,4,5,6], 5.5));

function averagePair(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
        let avg = (arr[start]+arr[end]) / 2 
        if(avg === num) return true;
        else if(avg < num) start++
        else end--
    }
    return false;
    }