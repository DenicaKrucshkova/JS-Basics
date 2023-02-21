function wolking(input) {
    let index = 0;

    let carrentSteps = Number[index];
    index++;

    let totalSteps = 0;

    while (carrentSteps !== "Going home") {
        carrentSteps = Number[carrentSteps];
        totalSteps += carrentSteps;

        if (totalSteps >= 10000) {
            let stepAboveGoal = totalSteps - 10000;
            console.log("Goal reached! Good job!");
            console.log(`${stepAboveGoal} steps over the goal!`)
            return;
        }
        carrentSteps = input[index];
        index++;


    }
    let stepsGoimgHoume = Number(input[index]);
    totalSteps += stepsGoimgHoume;

    if (totalSteps >= 1000) {
        let stepAboveGoal = totalSteps - 10000;
        console.log("Goal reached! Good job!")
        console.log(`${stepAboveGoal}steps over the goal!`)

    } else {
        let stepBelowGoal = 10000 - totalSteps;
        console.log(`${stepBelowGoal} more steps to reach goal`)
    }
}

wolking(["1000",

"1500",

"2000",

"6500"]);

