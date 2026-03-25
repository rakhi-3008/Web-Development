//loops - to iterate a piece of code
for(let i=1; i<=5; i++){
    console.log(i);
}

console.log("odd numbers 1-15");
for(let i=1; i<=15; i=i+2){
    console.log(i);
}

console.log("even numbers 2-10");
for(let i=2; i<=10; i=i+2){
    console.log(i);
}

console.log("multiplication table for 5");
for (let i =5 ; i<=50 ; i=i+5){
    console.log(i);
}

for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}

let j =1;
while(j<=5){
    console.log(j);
    j++;
}
// console.log(j);

// let favMovie = "Avatar";
// let guess = prompt("guess fav. movie");
// while(guess !=favMovie && guess != "quit"){
//     console.log("guess again");
//     guess = prompt("guess again");
// }
// console.log("your guess correct");

//break keyword
let i=1;
while(i<=5){
    if(i==3){
        break;
    }
    console.log(i);
}

let colors = ["red", "yellow", "blue", "blue", "green", "pink"];
for(let i = 1; i<colors.length(); i++){
    console.log(i, colors[i]);
}

let nums = [[2, 4], [3, 6], [4, 8]];
for(let i=0; i<nums.length; i++){
    for(let j=0; j<nums[i].length; j++){
        console.log(nums[i][j]);
    }
}

//for of loop
// let fruits = ["apple", "mango", "litchi", "banana"];
// for(fruit of fruits){
//     console.log(fruit);
// }