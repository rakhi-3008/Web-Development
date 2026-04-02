//async function
async function greet(){
    return "hello";
}
console.log(greet());

greet()
.then((result)=>{
    console.log("promise resolved");
    console.log(result);
})
.catch(()=>{
    console.log("promise rejected");
})

//await keyboard - pauses the execution of its surrounding async function until the promise is settled (resolved or rejected)

function getNum(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function demo(){
    await getNum();
    await getNum();
    await getNum();
}
demo();

//handle rejection using try and catch