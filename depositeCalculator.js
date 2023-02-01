function depositeCalculator(input){
    let depositedSum=Number(input[0]);
    let depositeperiodM=Number(input[1]);
    let yearlyInc=Number(input[2]);
    let yearDecimal=yearlyInc/100;
    let sum=depositedSum+depositeperiodM*((depositedSum*yearDecimal)/12);
    console.log(sum);
}
depositeCalculator(["200 ","3","5.7"]);