  
const mobiles =[
    {name:"Samsung", price: 30000, camera: "12MP", color:"Black"},
    {name:"Oppo", price: 25000, camera: "12MP", color:"Black"},
    {name:"Realme", price: 20000, camera: "12MP", color:"Black"},
    {name:"Iphone", price: 130000, camera: "12MP", color:"Black"},
    {name:"xiaomi", price: 21000, camera: "12MP", color:"Black"}
];

function cheapestPhone(phones){
    // console.log(phones)
    let lowPrice = mobiles[0];
    for(const phone of phones){
        if(phone.price < lowPrice.price){
            lowPrice = phone;
        }
    }
    return lowPrice;
}

const myBudget = cheapestPhone(mobiles)
console.log("Cheapest Phone Price :",myBudget )