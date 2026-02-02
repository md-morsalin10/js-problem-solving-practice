

function incToFeet(inch){
    const feet= inch / 12;
    return feet;
}

const shakil = incToFeet(75)
// console.log(shakil)


function inch2Feet(inch){
    const feetfraction = inch / 12;
    const feetNum= parseInt(feetfraction)
    const inchNum = inch % 12;
    const result = feetNum + " Ft " + inchNum + " inch. " 
    return result;
   
}

const shakib = inch2Feet(63)
console.log(shakib)

