
function averageOfEven(numbers){
    let evens = [];
    for(const number of numbers){
        if(number % 2 === 0){
            evens.push(number)
        }
    }
     
    let sum = 0;
    for(const number of evens){
        sum = sum + number;
    }
    const lan = evens.length;
    const average = sum / lan;
    return average;

}

const num = [14,45,46,69,68];
const aver = averageOfEven(num);
console.log(aver)
