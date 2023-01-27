function godzillaKong(input) {
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let clothesPrice = Number(input[2]);

    let decor = budget * 0.10;

    if (statists > 150) {
        clothesPrice -= clothesPrice * 0.10;


    }
    let allClothesPrice = statists * clothesPrice;
    let totalSum = allClothesPrice + decor;
    //let totalSum1 = totalSum - budget;
    let totlaSum2 = Math.abs(budget - totalSum);
    //let finPrice = decor - totalSum;

    if (totalSum > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${totlaSum2.toFixed(2)} leva more.`)
        // System.out.println();
        // System.out.printf("Wingard needs %.2f leva more.",totalSum-budget);

    } else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${totlaSum2.toFixed(2)} leva left.`)


    }
}
    //  System.out.println();
    // System.out.printf("Wingard starts filming with %2f leva left.",budget-totalSum);



godzillaKong(["20000",

    "120",

    "55.5"]);