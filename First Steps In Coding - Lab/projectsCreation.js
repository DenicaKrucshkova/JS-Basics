function projectsCreation(input){
    let name =input[0];
    let countProject = Number(input[1]);
    let result= countProject * 3; 
    
    console.log  (`The architect ${name} will need ${result} hours to complete ${countProject} project/s.`);


}
projectsCreation(["George","4"]);


