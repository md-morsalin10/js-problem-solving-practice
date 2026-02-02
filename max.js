


// const result = Math.max(20,10,35,241,25,65,32)
// console.log("The Maximum number is:", result)

function maximumNum(numbers){
    let max = numbers[0];
    for(const number of numbers){
        if(number> max){
            max = number;
        }
    }
    return max;
}

const array = [20,10,35,241,25,65,32];
const numb = maximumNum(array);
console.log(numb)