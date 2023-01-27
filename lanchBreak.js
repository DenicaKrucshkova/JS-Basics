function lanchbreak(input) {
    let movieTitle = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = breakDuration / 8.0;
    let restTime = breakDuration / 4.0;
    let busytime = lunchTime + restTime;

    let timeLeft = breakDuration-busytime //breakDuration * 1.0 - lunchTime - restTime;

    if (timeLeft >= episodeDuration) {
        let timeAfterNovie = timeLeft - episodeDuration;
        console.log(`You have enough time to watch ${movieTitle} and left with ${Math.ceil(timeAfterNovie)} minutes free time.`)

    } else {
        let timeNeeded = episodeDuration - timeLeft;
        console.log(`You don't have enough time to watch ${movieTitle}, you need ${Math.ceil(timeNeeded)} more minutes.`)
    }


}
lanchbreak(["Teen Wolf",

"48",

"60"])



