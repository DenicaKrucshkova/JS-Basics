function sumOfTwoNumber(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);

    let isValidComb = false;
    let count = 0;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            count++;
            let sum = i + j;
            if (sum == magicNum) {
                console.log(`Combination N:${count} (${i} + ${j} = ${magicNum})`);
              
                isValidComb = true;
                break;

            }

        }
        if (isValidComb) {
            break;

        }

    }
    if (!isValidComb) {
        console.log(`${count} combinations - neither equals ${magicNum}`);

    }
}
sumOfTwoNumber(["1",

    "10",

    "5"]);