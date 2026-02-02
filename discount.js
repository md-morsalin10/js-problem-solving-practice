
function discountPrice(quantity){
    const first100Price = 100;
    const secound100Price = 90;
    const third100Price = 70;
    if(quantity <= 100){
        const total = quantity*first100Price;
        return total;
    }
    else if(quantity<=200){
        const total = quantity*secound100Price;
        return total;
    }
    else{
        const total = quantity*third100Price;
        return total
    }
}

const total = discountPrice(150)
console.log(total)