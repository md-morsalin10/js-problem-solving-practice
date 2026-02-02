// inch to feet
function inchToFeet(inch){
    const feet = inch / 12;
    const feetNum = parseInt(feet);
    const inchNum = inch % 12;
    const result = feetNum + " Ft. " + inchNum + " inch. "
    return result;
}

const mustafizz = inchToFeet(75);
console.log(mustafizz)

// kilo to miles
function kiloToMile(kilo){
    const mile = kilo * 0.62137119;
    const result = mile + " miles "
    return result;
}

const kilomiter = kiloToMile(5);
console.log(kilomiter)