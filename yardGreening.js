function yardGreening (input){
    let sguareMeters=Number(input[0]);
        let priceperMeters=sguareMeters*7.61;
        let discountPercent=priceperMeters*0.18;
        let tottalPrice=priceperMeters-discountPercent;
       
        
        
 console.log("The final price is: " + tottalPrice + " lv.");
 console.log("The discount is: "+ discountPercent + " lv.");
       
}
    yardGreening(["550"]);