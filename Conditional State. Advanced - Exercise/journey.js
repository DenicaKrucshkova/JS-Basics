function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let typeVacation = "";

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            typeVacation = "Camp";
            budget = budget * 0.75;
        } else if (season === "winter") {
            typeVacation = "Hotel";
            budget = budget * 0.875;
        }

    } else if (budget > 100 && budget <= 1000)
        destination = "Balkans";
    if (season === "summer") {
        typeVacation = "Camp";
        budget = budget * 0.4;

    } else if (season === "winter") {
        typeVacation = "Hotel";
        budget = budget * 0.8;

    } else if (budget <= 1000) {
        destination = "Europe";

        typeVacation = "Camp";
        budget = budget * 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${typeVacation} - ${budget.toFixed(2)}`);

}
journey(["50", "summer"])