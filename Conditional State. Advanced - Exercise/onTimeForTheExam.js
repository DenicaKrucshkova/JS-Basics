function onTimeForTheExam(input) {

    let hour = Number(input[0]);
    let min = Number(input[1]);
    let hourA = Number(input[2]);
    let minA = Number(input[3]);

    let totalMin = hour * 60 + min;
    let totalminA = hourA * 60 + minA;
    let diff = totalMin - totalminA;

    if (diff == 0) {
        console.log("On time")

    } else if (diff > 0 && diff <= 30) {
        console.log(`On time ${Math.abs(diff)} minutes before the start`)

    } else if (diff < 0) {
        diff = Math.abs(diff);
        console.log("Late");

        if (diff >= 60) {
            hour = diff / 60;
            min = diff % 60;
            console.log(` ${hour} : ${min} hours after the start`)

        } else {
            console.log(` ${diff} minutes after the start`)
        }  {
            console.log("Early");
        }
        if (diff >= 60) {
            hour = diff / 60;
            min = diff % 60;
            console.log(`${hour} : ${min} hours before the start`);

        } else {
            console.log(` ${diff} minutes before the start`);
        }

    }
}
onTimeForTheExam(["9",

"30",

"9",

"50"])
