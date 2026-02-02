
function layeredDiscount(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const third100Price = 70;
    
    if(quantity <= 100){
        const total = quantity*first100Price;
        return total;
    }
    else if(quantity <= 200){
        const first100Total = 100 * first100Price;
        const reaminingQuantity = quantity-100;
        const remainingTotal = reaminingQuantity*second100Price;
        const total = first100Total+remainingTotal;
        return total;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const reaminingQuantity = quantity - 200;
        const remainingTotal = reaminingQuantity*third100Price;
        const total = first100Total+second100Total+remainingTotal;
        return total;

    }
}

const total = layeredDiscount(205);
console.log(total)