// promises - promise object represents the eventual OfflineAudioCompletionEvent(or failure)of an asynchronous operation and its resulting value.

//resolve & reject 
function saveToDb(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("success : data saved");
        }else{
            reject("failure: weak connection");
        }
    });
};
console.log(saveToDb("hello world"));

//then() & catch() methods of Promise object
let request = saveToDb("hello world");  //request = promises object
request
.then(()=>{
    console.log("promise 1 resolved");
    return saveToDb("welcome");
})
.then(()=>{
    console.log("promise 2 resolved");
})
.catch(()=>{
    console.log("promise rejected")
});


//results & errors
request
.then((result)=>{
    console.log("promise 1 resolved");
    console.log(result);
    return saveToDb("welcome");
})
.then((result)=>{
    console.log("promise 2 resolved");
    console.log(result);
})
.catch((error)=>{
    console.log("promise rejected");
    console.log(error);
});

let h1= document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed");
        }, delay);
    });
};

changeColor("red", 1000)
    .then(()=>{
        console.log("red color");
        return changeColor("green", 1000);
    })
    .then(()=>{
        console.log("green color");
        return changeColor("blue", 1000);
    })
    .then(()=>{
        console.log("blue color");
    });
