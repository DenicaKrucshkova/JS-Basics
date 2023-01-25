function tradeComissions(input) {
    let town = input[0];
    let s = Number(input[1]);

    let profit = 0.0;
    let result = 0.0;
    if (profit >= 0 && profit <= 500) {
        if (town === "Sofia") {
            result = profit * 0.05;
        } else if (profit > 500 && profit <= 1000) {
            result = profit * 0.07;
        } else if (profit > 1000 && profit <= 10000) {
            result = profit * 0.08;
        } else if (profit > 10000) {
            result = profit * 0.12;
        } else {
            console.log("error");

        }
    } else if (town === "Varna") {
        if (profit >= 0 && profit <= 500) {
            result = profit * 0.045;
        } else if (profit > 500 && profit <= 1000) {
            result = profit * 0.075;
        } else if (profit > 1000 && profit <= 10000) {
            result = profit * 0.10;
        } else if (profit > 10000) {
            result = profit * 0.13;
        } else {
            console.log("error");

        }
    } else if (town == "Plovdiv") {
        if (profit >= 0 && profit <= 500) {
            result = profit * 0.055;
        } else if (profit > 500 && profit <= 1000) {
            result = profit * 0.08;
        } else if (profit > 1000 && profit <= 10000) {
            result = profit * 0.12;
        } else if (profit > 10000) {
            result = profit * 0.145;
        } else {
            console.log("error");
        }
    }
    console.log(result.toFixed(2));
}
tradeComissions(["Plovdiv", "499.99"])
