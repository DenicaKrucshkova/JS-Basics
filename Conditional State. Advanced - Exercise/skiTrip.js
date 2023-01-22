function skiTrip(input) {
    let days = Number(input[0]);
    let typePremesis = input[1];
    let positiveNegative =input[2];

    let nightPrice;
    let discount = 0.0;
    let nights = days - 1;
    let total = 0;

    switch (typePremesis) {
        case "room for one person":
            nightPrice = 18.0;
            total = nights * nightPrice;
            break;
        case "apartment":
            nightPrice = 25.0;
            total = nights * nightPrice;
            if (nights <= 10) {
                total = total * 0.70;

            } else if (nights <= 15) {
                total = total * 0.65;

            } else {
                total = total * 0.50;
            } break;
        case "president apartment":
            nightPrice = 35.0;
            total = nights * nightPrice;
            if (nights <= 10) {
                total = total * 0.90;

            } else if (nights <= 15) {
                total = total * 0.85;

            } else {
                total = total * 0.80;
            } break;



    }
    if (positiveNegative === "positive") {
        total = total * 1.25;
        console.log(`${total.toFixed(2)}`);

    } else if (positiveNegative === "negative") {
        total = total * 0.90;
        console.log(`${total.toFixed(2)}`);

    }
} 
skiTrip(["14",

    "apartment",

    "positive"])