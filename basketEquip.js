function basketEquip(input) {
    let fee = Number(input[0]);

    let feeSneakers = fee * 0.60;
    let basketballTeam = feeSneakers * 0.80;
    let basketballBool = basketballTeam * (1.0 / 4);
    let basketAccessories = basketballBool * (1.0 / 5);

    let totalSum = fee + feeSneakers + basketballTeam + basketballBool + basketAccessories;
    console.log(totalSum)

} 
basketEquip(["365 "]);