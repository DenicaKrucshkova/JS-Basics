function histogram(input) {
    let countNumbers = Number(input[0]);//numsCount
    let value = 0;//carrentNum

    let count1 = 0;//p1Count
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;

    for (let i = 1; i <= countNumbers; i++) {
        let value = Number(input[i]);

        if (value < 200) {
            count1++;

        } else if (value >= 200 && value <= 399) {
            count2++;


        } else if (value >= 400 && value <= 599) {
            count3++;

        } else if (value >= 600 && value <= 799) {
            count4++;

        } else if (value >= 800) {
            count5++;

        }


    } 
    let p1 = (count1 / countNumbers) * 100;
    let p2 = (count2 / countNumbers) * 100;
    let p3 = (count3 / countNumbers) * 100;
    let p4 = (count4 / countNumbers) * 100;
    let p5 = (count5 / countNumbers) * 100;
    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);

}
histogram(["3",

    "1",

    "2",

    "999"])


