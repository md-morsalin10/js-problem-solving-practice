const product = [
    {name:"shirt", price:500, quantity: 3},
    {name:"pant", price:550, quantity: 2},
    {name:"shoe", price:900, quantity: 1},
    {name:"perfume", price:300, quantity: 1},
    {name:"Sunglass", price:420, quantity: 3}
]

function shoppingCart(products){
    let cost = 0;
    for(const product of products){
        const productCost = product.price*product.quantity;
        cost = cost+productCost;
    }
    return cost;
}

const total = shoppingCart(product);
console.log("Total Costing :", total, "Taka Only")