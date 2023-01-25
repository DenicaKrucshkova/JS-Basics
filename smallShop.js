function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    let price = 0;
   
    if (town == "Sofiq") {
        if (product == "coffee") {
            price =quantity* 0.5;
        } else if (product == "water") {
            price = 0.80;
        } else if (product == "beer") {
            price =quantity* 1.20;
            console.log(price);

        } else if (product == "sweets") {
            price = 1.45;
        } else if (product == "peanuts") {
            price = 1.60;
        }

    } else if (town === "Varna") {
        if (product === "coffee") {
            price = 0.45;

        } else if (product === "water") {
            price = 0.70;

        } else if (product === "beer") {
            price = 1.10;

        } else if (product === "sweets") {
            price = 1.35;

        } else if (product === "peanuts") {
            price = 1.55;
        }

    } else if (town === "Plovdiv") {


        if (product === "coffee") {
            price = 0.40;

        } else if (product === "water") {
            price = 0.70;

        } else if (product === "beer") {
            price = 1.15;

        } else if (product === "sweets") {
            price = 1.30;

        } else if (product === "peanuts") {
            price = 1.50;
        }

    }
    let sum = quantity * price;
    console.log(sum);
}
smallShop(["beer", "Sofia", "2"]) 



