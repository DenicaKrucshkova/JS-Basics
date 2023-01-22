function summerOutfit (input) {
    let degrees = input[0];
    let dayTame = input[1];


    let autfit = "";
    let shoes = "";

    switch (dayTame) {
        case "Morning":
            if (degrees >= 10 && degrees <= 18) {
                autfit = "Sweatshirt";
                shoes = "Sneakers";

            } else if (degrees > 18 && degrees <= 24) {
                autfit = "Shirt";
                shoes = "Moccasins";

            } else if (degrees >= 25) {
                autfit = "T-Shirt";
                shoes = "Sandals";

            }
            break;
        case "Afternoon":
            if (degrees >= 10 && degrees <= 18) {
                autfit = "Shirt";
                shoes = "Moccasins";

            } else if (degrees > 18 && degrees <= 24) {
                autfit = "T-Shirt";
                shoes = "Sandals";

            } else if (degrees >= 25) {
                autfit = "Swim Suit";
                shoes = "Barefoot";
            }
            break;
        case "Evening":
            autfit = "Shirt";
            shoes = "Moccasins";
            break;
    }
   console.log(`It's ${degrees} degrees, get your ${autfit} and ${shoes}.`);

}
summerOutfit(["16",

    "Morning"]) 
