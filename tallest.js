function maxNumber(numbers){
    // console.log(numbers)
    let max = numbers[0];
    for(const number of numbers){
        if( number > max){
            max = number;
        }
    }
    return max;
}

const array = [12,25,66,64,98,32,96,36];
const num = maxNumber(array);
console.log(num)
