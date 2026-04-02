//DOM events - events are signals that something has occurred. (user inputs/ actions);

//mouse/pointer events:
let btn = document.querySelector('button');
console.dir(btn);

// btn.onclick = function(){
//     console.log("button was clicked");
// };

function sayHello(){
    console.log("hello world!");
};
// btn.onclick = sayHello;

btn.onmouseenter = function(){
        console.log("you entered a button");
};

function sayName(){
    console.log("javascript");
};

//event listener:
btn.addEventListener("click", sayName);
btn.addEventListener("click", sayHello);

let p = document.querySelector("p");
p.addEventListener("click", function(){
    console.log("paragraph was clicked");
});

//this in Event listeners - when 'this' is used in a callback of event handler of something, it refers to that something.
let btn1=document.querySelector("#btn");
btn1.addEventListener("click", function(){
    console.log(this);  //refer to btn1 
});

//keyboard events:
let btn2 = document.querySelector("#kb");
btn2.addEventListener("click", function(event){
    console.log(event);
});

let inp = document.querySelector("input");
inp.addEventListener("keydown", function(event){
    console.log(event);
    console.log("key pressed");
});

inp.addEventListener("keyup", function(event){
    console.log(event);
    console.log("key released");
});

// form events:
let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();     //same page par e rehnge
    // console.log("form submitted");
    let input = document.querySelector("#forminp");
    console.log(input.value);
});

// event bubbling
let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function(event){

    console.log("div clicked");
});

ul.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("ul clicked");
});

for(li of lis){
    li.addEventListener("click", function(event){
        event.stopPropagation();
        console.log("li clicked");
    })
};
