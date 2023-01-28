function time_15minutes(input) {
    let hour = Number(input[0]);
    let min = Number(input[1]);

    let totalMin = hour * 60 + min + 15;
    
    hour = Math.floor(totalMin / 60);
    min = totalMin % 60;
    if (hour>23) {
        hour=0;

        
    }
    if (min < 10) {
        console.log(`${hour}:0${min}`);


    } else {
        console.log(`${hour}:${min}`);
    }


    // console.log("%d:%02d", hour, min);

}
time_15minutes(["1",

    "46"])
