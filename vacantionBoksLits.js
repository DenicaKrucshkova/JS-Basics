function vacantionBuksList(input){
    let currBookPeges=Number(input[0]);
    let pagesPHour=Number(input[1]);
    let daysCount=Number(input[2]);

    let totalH=currBookPeges/pagesPHour;
    let hours=totalH/daysCount;
    console.log(hours);
}
vacantionBuksList (["212","20","2"]);