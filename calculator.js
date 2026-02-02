function add(num1, num2){
    const sum = num1+num2;
    return sum;
}

function subtract(num1, num2){
    const sub = num1-num2;
    return sub;
}

function multiply(num1, num2){
    const multi = num1*num2;
    return multi;
}

function divide(num1, num2){
    return num1/num2;
}

function calculate(a, b,  operation){
    if(operation==="add"){
        const result = add(a,b);
        return result;
    }
    else if(operation==="subtract"){
        const result = subtract(a,b)
        return result;
    }
    else if(operation==="multiply"){
        const result = multiply(a,b);
        return result;
    }
    else if(operation==="divide"){
        const result = divide(a,b);
        return result;
    }
    else{
        return " Only 'add', 'subtract', 'multiply', and 'divide' operation are allowed "
    }
}

const input = calculate(42,15, "multiply")
console.log(input)