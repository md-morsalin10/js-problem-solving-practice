function dublicateCheck(array){
    let uniq = [];
    for(const number of array){
        if(uniq.includes(number) === false){
            uniq.push(number)
        }
    }
    return uniq;
}

const number = [12,12,32,23,21,23,21,1,2,2]
const duplicate = dublicateCheck(number)
console.log(duplicate)