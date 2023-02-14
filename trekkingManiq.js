function trekkingManiq(input) {
    //1. четем броя на групите
    // всяка  група на отделен ред броя на хората в групата.
    //2 пускаме цикъл, който ще пресмята случайте
    // проверяваме колко на брой са хората и какъв процент са ( t1= t1/ n*100)
    let n = Number(input[0]);
    let peopleCount = 0;
    let gr1 = 0;
    let gr2 = 0;
    let gr3 = 0;
    let gr4 = 0;
    let gr5 = 0;


    for (let i = 1; i <= n; i++) {
        let group = Number(input[i]);
        peopleCount += group;

        if (group <= 5) {
            gr1 += group;
        }
        else if (group <= 12) {
            gr2 += group;
        }
        else if (group <= 25) {
            gr3 += group;
        }
        else if (group <= 40) {
            gr4 += group;
        }
        else {
            gr5 += group;
        }

    }
    gr1 = gr1 / peopleCount * 100;
    gr2 = gr2 / peopleCount * 100;
    gr3 = gr3 / peopleCount * 100;
    gr4 = gr4 / peopleCount * 100;
    gr5 = (gr5 / peopleCount) * 100;
    console.log(`${gr1.toFixed(2)}%`);
    console.log(`${gr2.toFixed(2)}%`);
    console.log(`${gr3.toFixed(2)}%`);
    console.log(`${gr4.toFixed(2)}%`);
    console.log(`${gr5.toFixed(2)}%`);


} 
trekkingManiq(["10",

    "10",

    "5",

    "1",

    "100",

    "12", "26", "17", "37", "40", "78"])