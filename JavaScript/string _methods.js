// str.trim()
let msg = "      hello   ";
console.log(msg);
console.log(msg.trim());

let msg1 = "  he  lloo";
console.log(msg1);
console.log(msg1.trim());

// let password = prompt("enter your password");
// let newPassword=password.trim();
// console.log(newPassword);

// strings are immutable in javascript - methods apply karne se koi change nhi aata, new string banti hai

//str.toUpperCase()
let name = "web development";
console.log(name.toUpperCase());

//str.toLowerCase()
let game = "PUBG";
console.log(game.toLowerCase());

//string methods with arguments

//indexOf - return first index of occurrence of sme value in string or gives -1 if not found

let str= "IloveCoding";

console.log(str.indexOf("love"));
console.log(str.indexOf("j"));  // -1
console.log(str.indexOf("g"));

//method chaining - useone method after another (left to right)

let s = "     hello world   ";
// let newS= s.trim();
// console.log(newS);
// newS = newS.toUpperCase();
// console.log(newS);

let newS= s.trim().toUpperCase();
console.log(newS);

//str.slice(startidx, lastidx) - returns a part of the original sring as a new string  (ending index non including)

console.log(str.slice(5));
console.log(str.slice(1, 5));
console.log(str.slice(0, 3));

//str.replace() - searches a value in the string & returns a new string with the value replaced 

console.log(str.replace("love", "do"));

//str.repeat() - returns a string with the number of copies of a sting 

console.log(str.repeat(3));