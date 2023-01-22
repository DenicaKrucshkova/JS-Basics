function operationBeNumbers(input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = Number(input[2]);


 
       let result;
    let oddOrEven = "";

    switch (operator) {
        case "+":
            result =N2+N1;
            if (result % 2 == 0) {
                oddOrEven = "even";

            } else {
                oddOrEven = "odd";

            } 
            console.log(`${N1} ${operator} ${N2} = ${result} - ${oddOrEven}`);
            break;
        case "-":
            result = N1 - N2;
            if (result % 2 == 0) {
                oddOrEven = "even";

            } else {
                oddOrEven = "odd";
            }
            console.log(`${N1} ${operator} ${N2} = ${result} - ${oddOrEven}`);
            break;
        case "*":
            result = N1 * N2;
            if (result % 2 == 0) {
                oddOrEven = "even";

            } else {
                oddOrEven = "odd";
            }
            console.log(`${N1} ${operator} ${N2} = ${result} - ${oddOrEven}`);
            break;
        case "/":
            if (N2 == 0) {
                console.log(`Cannot divide ${N1} by zero`);


            } else {
                let divideResult = (1.0 * N1) / N2;
                console.log(`${N1} ${operator} ${N2} = ${divideResult.toFixed(2)}`);
            } break;
        case "%":
            if (N2 == 0) {
                console.log(`Cannot divide ${N1} by zero`);


            } else {
                result = N1 % N2;
                console.log(`${N1} ${operator} ${N2} = ${result}`);
            } break;
    }
}
operationBeNumbers(["10",

    "12",

    "+"])