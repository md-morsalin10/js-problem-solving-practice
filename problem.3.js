// Your task is to calculate the total budget required to buy electronics:
//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(laptopQ, tabletQ, mobileQ){
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const laptopTotalPrice = laptopPrice*laptopQ;
    const tabletTotalPrice =  tabletPrice*tabletQ;
    const mobileTotalPrice = mobilePrice*mobileQ;

    const totalCost = laptopTotalPrice+tabletTotalPrice+mobileTotalPrice;
    return totalCost


}

const input = calculateElectronicsBudget(1,3,2)
console.log("Total Cost :", input);