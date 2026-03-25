//Arrays - linear collection of things

// let student1 = "aman";
// let student2= "rajat";
// let student3 = "ram";

let students = ["aman", "rajat", "ram"];
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

let info = ["rakhi", 18, 99];

//empty array
let emptyArr = [];
console.log(emptyArr.length);

//arrays are mutable
let fruits = ["mango", "apple", "banana"];
fruits[1]="apple";

fruits[5]="papaya"; // length = 6

//array methods

//push - add to end
let cars= ["audi", "toyota", "bmw"];
cars.push("maruti");
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);

//pop - delete from end and return it
cars.pop();
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);   //deleted

//unshift - add to start
cars.unshift("abs");

//shift - delete from start and return it
let followers = ["a", "b", "c"];
let blocked = followers.shift();
console.log(blocked);

//array maethods

//indexOf()
let primary = ["red", "yellow", "blue"];
console.log(primary.indexOf("yellow"));
console.log(primary.indexOf("green"));  // -1 if element not in array
console.log(primary.indexOf("blue"));

//includes()
console.log(primary.includes("green"));  //false
console.log(primary.includes("blue"));  //true

//concat() - merge two arrays
let secondary = ["blue", "green", "pink"];
let merge = primary.concat(secondary);
console.log(merge);

//reverse()- reverse an array
console.log(primary.reverse()); //chnages in original array
console.log(primary.reverse());

//slice()- copies a portion of an array
let colors = ["red", "yellow", "blue", "blue", "green", "pink"];
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2, 3));
console.log(colors.slice(-2));

//splice() - removes/ replaces/ add elements in place
//splice(start,  deleteCount, item0....itemN) - (changes in original array)
console.log(colors.splice(3));
console.log(colors.splice(0, 1));
console.log(colors.splice(1, 2));
colors.splice(0, 0, "blue", "green", "pink"); //adds in starting
console.log(colors);

//sort() - sorts an array
let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "sunday"];
console.log(days.sort());

let num = [80, 42, 67, 89, 100];    //convert first in string
console.log(num.sort());

//array references - address in memory
console.log([1]==[1]); //both stored in different location
let arr = ['a', 'b'];
let arrCopy = arr;
arrCopy.push('c');
console.log(arrCopy);

//nested array - multidimensional array
let nums = [[2, 4], [3, 6], [4, 8]];
console.log(nums);
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[0][1]);
console.log(nums[1][1]);
console.log(nums[2][1]);

