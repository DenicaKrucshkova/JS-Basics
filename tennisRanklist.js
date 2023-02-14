function tennnisRanklist(input) {
    let tournaments = Number(input[0]);
    let startPoints = Number(input[1]);
    let points = 0;
    let winCount = 0;

    for (let i = 2; i <= input.length; i++) {
        let position = input[i];
        if (position === "W") {
            points += 2000;
            winCount++;

        } else if (position === "F") {
            points += 1200;
          

        } else if (position === "SF") {
            points += 720;
            

        }

    }
    let points1=startPoints+points;
    let points2=Math.floor(points/tournaments);
    console.log(`Final points: ${points1}`);
    console.log(`Average points: ${points2}`);
    console.log(`${(1.0 * winCount / tournaments * 100).toFixed(2)}%`);
   
    
}
tennnisRanklist(["5",

"1400",

"F",

"SF",

"W",

"W",

"SF"])



