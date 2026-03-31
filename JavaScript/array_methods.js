//array methods

//forEach
let arr = [1, 2, 3, 4, 5];
let print = function(el){
    console.log(el);
}
arr.forEach(print);

// arr.forEach(function(el){
//     console.log(el);
// })

// arr.forEach((el) => {
//     console.log(el);
// })

let obj = [
    {
        name: "raj",
        marks: 98,
    },
    {
        name: "ram",
        marks: 94
    },
    {
        name: "ras",
        marks: 91,
    },
];

obj.forEach((student)=>{
    console.log(student.name);
})

//map
let num = [1, 2, 3, 4];
let newNum = num.map((el)=>{
    return el*2;
});
console.log(newNum);

let gpa = obj.map((el)=>{
    return el.marks/10;
})
console.log(gpa);

//filter - if true element add , else not add in arr
let nums= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = nums.filter((el)=>{
    return el%2==0;
})
console.log(even);

let odd = nums.filter((el)=>{
    return el%2!=0;
})
console.log(odd);

//every - returns trur if every element of array gives true for some function, else returns false
let ans = [1, 3, 5].every((el)=>{
    return el%2!=0;
})
console.log(ans);
let ans1 = [1, 3, 5, 4].every((el)=>{
    return el%2!=0;
})
console.log(ans1);

//reduce - reduces the array to a single value
//arr.reduce(reducer function with 2 variables for(accumulator, element));
let finalValue = [1, 2, 3, 4].reduce((res, el)=>{
    console.log(res);
    return res+el;
})
console.log(finalValue);

let arr2 = [2, 4, 7, 2, 1, 8, 45 ,73];
let max = arr2.reduce((res, el)=>{
    if(res<el){
        return el;
    }else{
        return res;
    }
});
console.log(max);

//default parameters - giving a default value to the arguements
function sum(a, b=2){
    return a+b;
}
console.log(sum(4));    //6
console.log(sum(4, 5));     //9

//spread - expands an iterable into multiple values
console.log(...arr2);
console.log(..."hello world");

let o = [1,3,5];
let e = [2, 4, 6];
let r = [...o, ...e];
console.log(r);

let data = {
    email: "abc@gmail.com",
    password: "abc",
};

let dataCopy = {...data, id: 123};
console.log(data);
console.log(dataCopy);

//rest = allows a function to take an indefinite number of arguements and bundle them in an array
function add(...args){
    return args.reduce((sum, el)=> sum+el );
}
console.log(add(2, 4, 5, 2, 7));

//destructuring - storing values of array into multiple variables
let names = ["tony", "brace", "steve", "peter"];
let [winner, runnerup, ...others]=names;
console.log(winner, runnerup);

//for objects
let students = {
    name: "ramm",
    age: 19,
    class: 12,
    username: "aba",
    password: "assdd",
};
// let username = students.username;
// let password = students.password;

let {username, password} = students; //same keys
let {username : user, password: pass} = students; 
