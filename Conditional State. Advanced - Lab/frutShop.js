function frutShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantiy = Number(input[2]);
    let price = 0.0;

    if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
        if (fruit == "banana") price = 2.50;
        else if (fruit == "apple") price = 1.20;
        else if (fruit == "orange") price = 0.85;
        else if (fruit == "grapefruit") price = 1.45;
        else if (fruit == "kiwi") price = 2.70;
        else if (fruit == "pineapple") price = 5.50;
        else if (fruit == "grapes") price = 3.85;
        let tottalSum = quantiy * price;
        {
            console.log(tottalSum);
        }
    }
    else if (day == "Saturday" || day == "Sunday") {
        if (fruit == "banana") price = 2.70;
        else if (fruit == "apple") price = 1.25;
        else if (fruit == "orange") price = 0.90;
        else if (fruit == "grapefruit") price = 1.60;
        else if (fruit == "kiwi") price = 3.00;
        else if (fruit == "pineapple") price = 5.60;
        else if (fruit == "grapes") price = 4.20;
        let tottalSum = quantiy * price;
        {
            console.log(tottalSum.toFixed(2));
        }
    }
    else {
        console.log("error");
    }
}
frutShop(["apple",

    "Tuesday",

    "2"])
