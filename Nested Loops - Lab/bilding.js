function bilding(input) {
    let floorsCount = Number(input[0])
    let roomsCount = Number(input[1]);
    result = "";

    for (let floor = floorsCount; floor >= 1; floor--) {
        for (let room = 0; room < roomsCount; room++) {
            if (floor === floorsCount) {
                if (room === roomsCount - 1) {
                    result = result + "L" + floor + room;
                } else {
                    result = result + "L" + floor + room + " ";
                }

            } else if (floor % 2 === 0) {
                if (room === roomsCount - 1) {
                    result = result + "O" + floor + room;
                } else {
                    result = result + "O" + floor + room + " ";
                }
            } else {
                if (room === roomsCount - 1) {
                    result = result + "A" + floor + room;
                } else {
                    result = result + "A" + floor + room + " ";
                }
            }

        }
        console.log(result);
        result="";
    }


} 

bilding(["6",

    "4"])
