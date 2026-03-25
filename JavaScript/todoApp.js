let todo = [];
let req = prompt("please enter your request");

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }
    else if(req == "list"){
        for(let i=0; i<todo.length; i++){
            console.log(i , todo[i]);
        }
    }
    else if(req == "add"){
        let task = prompt("please enter your task");
        todo.push(task);
        console.log("task added");
    }else if(req == "delete"){
        let idx = prompt("enter the task index");
        todo.splice(idx, 1);
        console.log("task deleted");
    }else {
        console.log("wrong request");
    }
    let req = prompt("please enter your request");

}