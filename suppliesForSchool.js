function suppliesforSchool(input) {
    let chemical = Number(input[0]);
    let tag = Number(input[1]);
    let chalkboard =Number(input[2]);
    let percent = Number(input[3]);

    let chemicalPrice = chemical * 5.80;
    let tagPrice = tag * 7.20;
    let chalkboardPrice = chalkboard * 1.20;
    let totalPrice = chemicalPrice + tagPrice + chalkboardPrice;
    let totalPercent = totalPrice-(totalPrice * percent/100);
console.log(totalPercent);

} 
suppliesforSchool(["2 ",

    "3 ",

    "4 ",

    "25 "] )