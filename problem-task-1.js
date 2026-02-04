// Task -Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];1:



function findLowest(numbers){
    let small = numbers[0]
    for (const number of numbers){
        if(small>number){
            small=number;
        }

    }
    return small;
}

 const heights2 = [167, 190, 120, 165, 137];
 const result = findLowest(heights2);
 console.log(result)