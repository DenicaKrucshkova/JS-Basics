function cons(input) {
    let totalsum = Number(input[0]);
    let exchangeLeft = Math.round(totalsum * 100);//prevra6tan na levove v stotinki
    let countCoins = 0;

    while (exchangeLeft > 0) {
        if (exchangeLeft >= 200) {
            totalsum -= 200;
            countCoins++;

        }
        else if (exchangeLeft >= 100) {
            exchangeLeft -= 100;
            countCoins++;


        }
        else if (exchangeLeft >= 50) {
            exchangeLeft -= 50;
            countCoins++;

        }
        else if (exchangeLeft >= 20) {
            exchangeLeft -= 20;
            countCoins++;

        }
        else if (exchangeLeft >= 10) {
            exchangeLeft -= 10;
            countCoins++;

        }
        else if (exchangeLeft >= 5) {
            exchangeLeft -= 5;
            countCoins++;

        }
        else if (exchangeLeft >= 2) {
            exchangeLeft -= 2;
            countCoins++;

        }
        else if (exchangeLeft >= 1) {
            exchangeLeft -= 1;
            countCoins++;

        }
        break;



   console.log(countCoins);
    }
}
cons(["2"]);