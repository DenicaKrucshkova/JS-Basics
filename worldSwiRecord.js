function worldSwiRecird(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timeInSec = Number(input[2]);

    let result = distance * timeInSec;
    let slowDown = Math.floor(distance / 15) * 12.5;
    let finalResult = result + slowDown;
    let finalResult1=Math.abs(record-finalResult);
    if (finalResult < record) {
        console.log(`Yes, he succeeded! The new world record is ${(finalResult).toFixed(2)} seconds.`)
        //System.out.printf("Yes, he succeeded! The new world record is %.2f seconds.",finalResult);

    } else {
        console.log(`No, he failed! He was ${(finalResult1).toFixed(2)} seconds slower.`)
        //System.out.printf("No, he failed! He was %.2f seconds slower.",Math.abs(record-finalResult));
    }
}
worldSwiRecird (["10464",

"1500",

"20"])