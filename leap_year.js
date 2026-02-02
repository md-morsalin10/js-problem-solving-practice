
function isLeapYear(year){
    if( year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if( year % 400 ===0){
        return true;
    }
    else{
        return false;
    }
}

const isleap = isLeapYear(2000)
const isleap2 = isLeapYear(2100)
const isleap3 = isLeapYear(2040)
const isleap4 = isLeapYear(2500)
console.log(isleap, isleap2, isleap3, isleap4)