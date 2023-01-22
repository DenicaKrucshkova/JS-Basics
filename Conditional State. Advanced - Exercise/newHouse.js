function nuwHouse(input) {
    let flower = input[0];
    let flowersCount = input[1];
    let budget = input[2];

    let totalPrice = 0.0;//ob6tata suma

    switch (flower) {
        case "Roses":
            totalPrice = flowersCount * 5;
            if (flowersCount > 80) {
                totalPrice = totalPrice - (totalPrice * 0.10);

            } break;
        case "Dahlias":
            totalPrice = flowersCount * 3.80;
            if (flowersCount > 90) {
                totalPrice = totalPrice - (totalPrice * 0.15);

            } break;
        case "Tulips":
            totalPrice = flowersCount * 2.80;
            if (flowersCount > 80) {
                totalPrice = totalPrice - (totalPrice * 0.15);

            } break;
        case "Narcissus":
            totalPrice = flowersCount * 3;
            if (flowersCount < 120) {
                totalPrice = totalPrice + (totalPrice * 0.15);

            } break;
        case "Gladiolus":
            totalPrice = flowersCount * 2.50;
            if (flowersCount < 80) {
                totalPrice = totalPrice + (totalPrice * 0.20);

            } break;
    }
    if (totalPrice <= budget) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flower} and ${(budget - totalPrice).toFixed(2)} leva left.`);



    } else {
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`);
    }

} 
nuwHouse(["Roses",

    "55",

    "250"])