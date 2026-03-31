const sum = (a, b) => {
    console.log(a+b);
};
sum(2,3);

const cube = (n) => {
    return n*n*n;
}
console.log(cube(3));

const hello = () => {
    console.log("hello");
}
hello();

//implicit return
const mul = (a, b) => (
    a*b
);
console.log(mul(3,4));

//Set Timeout(funtion, timeout) function is callback
let id1 = setTimeout( () => {
    console.log("hello world");
}, 4000);
console.log("welcome to my site");
console.log(id1);

//Set Interval(function, timeout)
let id = setInterval(() => {
    console.log("hello");
}, 5000);
console.log(id);
clearInterval(id);

//this keyword - lexical scope
const student = {
    name: "rakhi",
    marks: 98,
    prop: this, //global scope
    getName: function(){
        return this.name;
    },
    getMarks: () => {
        console.log(this);  //parent's scope -> window
        return this.marks;
    }
};

