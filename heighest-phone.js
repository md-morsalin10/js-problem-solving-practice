const phones =[
    {name:"Samsung", price: 30000, camera: "12MP", color:"Black"},
    {name:"Oppo", price: 25000, camera: "12MP", color:"Black"},
    {name:"Realme", price: 20000, camera: "12MP", color:"Black"},
    {name:"Iphone", price: 130000, camera: "12MP", color:"Black"},
    {name:"xiaomi", price: 21000, camera: "12MP", color:"Black"}
];

function heighestPhonePrice(phones){
    let highest = phones[0]
    for(const phone of phones){
        if(phone.price > highest.price){
            highest = phone;
        }
    }
    return highest;
}

const myPhone = heighestPhonePrice(phones);
console.log("My Dream Phone is :", myPhone);