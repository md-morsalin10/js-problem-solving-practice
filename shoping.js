
const product = [
    {name:"shirt", price:500},
    {name:"pant", price:550},
    {name:"shoe", price:900},
    {name:"perfume", price:300},
    {name:"Sunglass", price:420}
]

function totalShopping(items){
    let totalSum = 0;
    for(const item of items){
        totalSum = totalSum+item.price;
    }
    return totalSum;
}

const total = totalShopping(product);
console.log(total)
