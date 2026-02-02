function averageOfOdd(numbers){
    // console.log(numbers)
    let oddNum =[];
    for(const number of numbers){
        // console.log(number)
        if(number % 2 ===1){
            oddNum.push(number)
        }
    }
    // console.log(oddNum)
    const lan = oddNum.length;
    let sum = 0;
    for( number of oddNum){
        // console.log(number)
        sum = sum + number;
    }
    const average = sum / lan;
    return average;
}

const numbers = [25,51,32,68,33];
const avr = averageOfOdd(numbers)
console.log("Average of the Odd Number:", avr)