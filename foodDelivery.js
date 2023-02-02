function foodDelivery(input){
    let chikenCount=Number(input[0]);
    let fishCount=Number(input[1]);
    let vegCount=Number(input[2]);

    let totalMPrice=(chikenCount*10.35)+(fishCount*12.40)+(vegCount*8.15);
    let desertPrice=totalMPrice*0.20;
    let totalPrice=totalMPrice+desertPrice+2.50;
    console.log(totalPrice);
}
foodDelivery(["2","4","3"]);