function passwordGues(input){
    let password=Number(input[0]);
    

    if (password=="s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    }
    else {
       console.log("Wrong password!");

        
    }
}
passwordGues(["s3cr3t!P@ssw0rd"]);