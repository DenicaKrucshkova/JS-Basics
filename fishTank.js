function fishTank(input){
    let length=Number (input[0]);
    let w=Number(input[1]);
    let h=Number(input[2]);
    let takeSpPercent=Number(input[3]);

    let takeSpDecimal=takeSpPercent/100;
    let takVolume=length*w*h;
    let tankVLiters=takVolume*0.001;
    let spaseTaken=takeSpDecimal*tankVLiters;
    let spaceLeft=tankVLiters-spaseTaken;
    console.log(spaceLeft)

}
fishTank(["85","75","47","17"]);