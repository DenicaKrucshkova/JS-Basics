function toyShop(input) {

    let exPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let tricks = Number(input[5]);
    //Пъзел - 2.60 лв.
    //
    //· Говореща кукла - 3 лв.
    //
    //· Плюшено мече - 4.10 лв.
    //
    //· Миньон - 8.20 лв.
    //
    //· Камионче - 2 лв.
    let toysCount = puzzles + dolls + bears + minions + tricks;
    let sum = puzzles * 2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + tricks * 2;
    if (toysCount >= 50) {
        sum = sum * 0.75;//sum=sum-(sum*o.25)
    }
    sum = sum * 0.9;
    let totalSum = sum - exPrice;
    let totalSum2 = exPrice - sum;
    if (exPrice <= sum) {
        //System.out.printf("Yes! %.2f lv left.", sum - exPrice);
        console.log(`Yes! ${totalSum.toFixed(2)} lv left.`);


    } else {
        //System.out.printf("Not enough money! %.2f lv needed.",exPrice-sum);}
        console.log((`Not enough money! ${totalSum2.toFixed(2)} lv needed.`))
    }



}
toyShop(["40.8",

    "20",

    "25",

    "30",

    "50",

    "10"]);