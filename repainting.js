function repainting(input) {
    let nylon = Number(input[0]);
    let pain = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let nylonSum = (nylon + 2) * 1.50;
    let painBonus=pain*0.10;
    let painSum = (pain + painBonus) * 14.50;
    let thinnerSum = thinner * 5.00;
    let totalSum = nylonSum + painSum + thinnerSum + 0.40;
    let sumMaster = (totalSum * 0.30) * hours;

    let totalSum2 = totalSum + sumMaster;

    console.log(totalSum2);



}
repainting(["5 ",

"10 ",

"10 ",

"1 "]);