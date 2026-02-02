// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// sample-input:

// numbers = 

// find: 25
// output: 0



function findDuplicate(numbers, find){
    let count=0;
    for(const num of numbers){
        if(num===find){
            count++;
        }
    }
    return count;
}


const array = [5,6,11,12,98, 5];
const target = 5;
const result = findDuplicate(array, target)
console.log(result)