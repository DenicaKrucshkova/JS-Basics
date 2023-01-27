function shopping(input) {
    let budget = Number(input[0])
    let videoCards =Number(input[1])
    let processors = Number(input[2])
    let ram = Number(input[3])

    let videoCardsTotalPrice = videoCards * 250;
    let processorPrice = videoCardsTotalPrice * 0.35;
    let ramPrice = videoCardsTotalPrice * 0.10;
    let

        totalPrice = videoCardsTotalPrice + processorPrice * processors + ram * ramPrice;

    if (videoCards > processors) {
        totalPrice *= 0.85;

    }
   
    finish =budget-totalPrice;
    finish2=totalPrice - budget;
    if (budget >= totalPrice) {
        console.log(`You have ${(finish).toFixed(2)} leva left!`)
        // System.out.printf("You have %.2f leva left!",budget-totalPrice);


    } else {
        console.log(`Not enough money! You need ${(finish2).toFixed(2)} leva more!`)
        //System.out.printf("Not enough money! You need %.2f leva more!", totalPrice - budget);
    }

}
shopping(["900",

    "2",

    "1",

    "3"])