function salary(input) {

    let tabs = Number(input[0]);
    let salary = Number(input[1]);

    for (let tab = 1; tab <= tabs; tab++) {
        let siteName = input[tab];

        switch (siteName) {
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;

        }
        if (salary > 0) {
            console.log("You have lost your salary.");
            break;


        }
        if (salary <= 0) {


        } console.log(salary);


    }
}
salary(["10",

    "750",

    "Facebook",

    "Dev.bg",

    "Instagram",

    "Facebook",

    "Reddit",

    "Facebook",

    "Facebook"]);