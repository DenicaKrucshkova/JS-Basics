function workingHours(arg1,arg2) {
    let hour = Number(arg1);
    let day= arg2;
    let isValid=hour >= 10 && hour <= 18;
    
    if (!isValid) {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log(`open`);
                break;
            default:
                console.log(`closed`);
                break;
        }
   
        
    }else{
        caches.log(`closed`);
    }
    




}
workingHours(["11",

"Monday"])
