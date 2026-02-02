
function celsiusToFereheingt(celsius){
    let result = (celsius*9/5)+32;
    return result;
}

const total = celsiusToFereheingt(32);
console.log(total, "fh")