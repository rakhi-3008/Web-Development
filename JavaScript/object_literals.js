const student = {
    name: "rakhi",
    age: 18,
    marks: 95,
    city: "chandigarh"
};

console.log(student["name"]);
console.log(student.marks);
student.city = "delhi";
student.gender="female";
student.marks= "A";
delete student.gender;

const item = {
    price: 100,
    discount: 20,
    colors: ["red", "pink"]
};

const post = {
    username: "@abc",
    content: "this is my first post",
    likes: 150,
    reposts: 5,
    tags: ["@xyz", "@mno"]
};

console.log(post.reposts);
console.log(post.tags[0]);

//nested objects
const classInfo = {
    raj: {
        grade: "A",
        city: "delhi"
    },
    ram: {
        grade: "A+",
        city: "pune"
    },
    ras: {
        grade: "B",
        city: "mumbai"
    }
}

console.log(classInfo.raj);
console.log(classInfo.raj.city);

//array of objects
const classinfo = [
    {
        name: "ram",
        grade: "A",
        city: "delhi"
    },
    {
        name: "raj",
        grade: "A",
        city: "delhi"
    },
    {
        name: "ras",
        grade: "A",
        city: "delhi"
    }
]

console.log(classinfo[1]);

//math object
console.log(Math)
console.log(Math.PI);
console.log(Math.E);

console.log(Math.abs(-4));
console.log(Math.pow(3,2));
console.log(Math.random()); //0 to 1 in which 1 is not included

//random integers
let step1 = Math.random();
let step2 = step1*10;
let step3=Math.floor(step2)+1;
console.log(step3);


