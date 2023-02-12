function cliverLily(input) {

    let age = Number(input[0]);
    let priceWasher = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let countToys = 0;
    let savedMoney = 0;
    let giftSum = 0;

    for (let birthday = 1; birthday <= age; birthday++) {
        if (birthday % 2 == 0) {
            giftSum += 10;
            savedMoney += giftSum - 1;

        } else countToys++;

    } let totalSum = (countToys * pricePerToy) + savedMoney;
    if (totalSum >= priceWasher) {
        let leftMoney = totalSum - priceWasher;
        console.log(`Yes! ${leftMoney.toFixed(2)}`);

    } else {
        let needMoney = priceWasher - totalSum;
        console.log(`No! ${needMoney.toFixed(2)}`);
    }
}
cliverLily(["10",

    "170.00",

    "6"])
