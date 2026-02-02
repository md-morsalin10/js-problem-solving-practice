
function woodQuantity(chairQuantity, tableQuantity, bedQuantity){

    const perChairWood = 5 ;
    const perTableWood = 20;
    const perBedWood = 35;

    const chairTotalWood = perChairWood*chairQuantity;
    const tableTotalWood = perTableWood*tableQuantity;
    const bedTotalWood = perBedWood*bedQuantity;

    const totalWood = chairTotalWood+tableTotalWood+bedTotalWood;
    return totalWood;

}

const wood = woodQuantity(2,1,1);
console.log("Total Wood Need :", wood , "cft")


function menCostume(shirtQ, pantQ, shoeQ ){

    const shirtPrice = 500;
    const pantPrice = 400;
    const shoePrice = 900;

    const shirtPriceTotal = shirtPrice*shirtQ;
    const pantPriceTotal = pantPrice*pantQ;
    const shoePriceTotal = shoePrice*shoeQ;

    const totalCost = shirtPriceTotal+pantPriceTotal+shoePriceTotal;
    return totalCost;
}

const shakibCostume = menCostume(2,3,1);
console.log("TotalCost :", shakibCostume, "TAKA ONLY")

