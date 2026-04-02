function hello(){
    console.log("hello world");
}
hello();

function rollDice(){
    console.log(Math.floor(Math.random()*6)+1);
}
rollDice();

//functions with arguements
function printName(name){
    console.log(name);
}
printName("rakhi");
printName();    //undefined

function sum(a, b){
    console.log(a+b);
}
sum(23, 89);

function average(a, b, c){
    console.log((a+b+c)/3);
}
average(23, 45, 78);

function table(num){
    i=1;
    while(i<=10){
        console.log(num*i);
        i++;
    }
}
table(5);

//return keyword
function multiply(a, b){
    return a*b;
}
let result=multiply(23, 67);
console.log(result);

function isAdult(age){
    if(age>=18){
        return "adult";
    }else{
        return "not adult";
    }
}
console.log(isAdult(14));

function sum1toN(n){
    let sum=0;
    for(let i=1; i<=n; i++){
        sum=sum+i;
    }
    return sum;
}
console.log(sum1toN(10));

let str = ["hii", "hello", "bye"];
function concat(str){
    let result="";
    for(let i=0; i<str.length; i++){
        result=result+str[i];
    }
    return result;
}
console.log(concat(str));

//scope- function, block, global, lexical
let greet = "hello";
function changeGreet(){
    let greet = "namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
}
console.log(greet);
changeGreet();

//function expressions
const s = function(a, b){
    return a+b;
}
console.log(s(23, 23));

//higher order function 
let multiGreet = function(func, n){
    for(let i=0; i<n; i++){
        func();
    }
}

let greets = function(){
    console.log("hello world");
}
multiGreet(greets, 10);

function oddOrEvenFactory(){
    if(request=="odd"){
        let odd = function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }else if(request=="even"){
        let even = function(n){
            console.log((n%2==0));
        }
        return even;
    }else{
        console.log("wrong request");
    }
}

const calculator = {
    add: function(a, b){
        return a+b;
    },
    sub: function(a, b){
        return a-b;
    },
    mul: function(a, b){
        return a*b;
    }
};

