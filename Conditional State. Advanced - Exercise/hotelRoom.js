function hotelRoom(input) {
    let month = input[0];
    let nights = input[1];
    let apartment = 0.0;
    let studio = 0.0;

    switch (month) {
        case "May":
        case "October":
            apartment = nights * 65;
            studio = nights * 50;

            if (nights > 14) {// 15.16.17
                studio = studio * 0.7;//30% otstapka
                apartment = apartment * 0.9;//10% otstapka

            } else if (nights > 7) {
                studio = studio * 0.95;

            } break;
        case "June":
        case "September":
            apartment = nights * 68.70;
            studio = nights * 75.20;

            if (nights > 14) {
                studio = studio * 0.80;
                apartment = apartment * 0.9;
            } break;
        case "July":
        case "August":
            apartment = nights * 77;
            studio = nights * 76;

            if (nights > 14) {
                apartment = apartment * 0.9;
            } break;
    }
    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);

}
hotelRoom(["May",

    "15"])
