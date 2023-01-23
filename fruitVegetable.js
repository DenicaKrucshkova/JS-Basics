function fruitVegetable(input){
    let vegetable =input[0];
    //Плодовете "fruit" са banana, apple, kiwi, cherry, lemon и grapes
    //
    //· Зеленчуците "vegetable" са tomato, cucumber, pepper и carrot
    //
    //· Всички останали са "unknown"
    //
    //Да се изведе "fruit", "vegetable" или "unknown" според въведения про

    switch (vegetable) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
           console.log("fruit");
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            console.log("vegetable");
            break;
        default:
            console.log("unknown");
            break;
    }
}
fruitVegetable(["banana"])
