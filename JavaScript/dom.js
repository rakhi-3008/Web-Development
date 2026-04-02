//DOM - represents a document with a logical tree
//it allows us to manipulate/change webpage content (HTML elements)

//selecting elements:

let imgObj = document.getElementById("mainImg");    //returns null if not found
console.log(imgObj);
console.dir(imgObj);

let paraObj = document.getElementById("description");
console.log(paraObj);
console.dir(paraObj);

let oldImgObj = document.getElementsByClassName("oldImg");      //returns empty collection if not found
for(let i=0; i<oldImgObj.length; i++){
    console.dir(oldImgObj[i]);
    console.dir(oldImgObj[i].src);
}

let p = document.getElementsByTagName("p");     //returns empty collection if not found
console.dir(p);

//query selectors:

console.dir(document.querySelector("h1")); //select first h1  element 

console.dir(document.querySelector("#description")); //select first element with id=description

console.dir(document.querySelector(".oldImg")); //select first element with class=oldImg

console.dir(document.querySelectorAll("p"));    //select all p elements

//selecting content in objects:

//* innerText - shows the visible text contained in a node
//* textContent - shows all the text
//* innerHTML - shows the full markup

let para = document.querySelector("p");
console.dir(para);
console.dir(para.innerHTML);
console.dir(para.innerText);
console.dir(para.textContent);

//manipulating attributes:
let img = document.querySelector("img");
console.log(img);
let id = img.getAttribute("id")
console.log(id);
// console.log(img.setAttribute("id", "newMainImg"));

//manipulating style:
console.log(img.style);
//* classList
console.log(img.classList);
console.log(document.querySelector("div").classList);

img.classList.add("heading");   //add class
console.log(img.classList);

img.classList.remove("heading");    //remove class
console.log(img.classList);

console.log(img.classList.contains("green"));   //to check if class exists

console.log(img.classList.toggle("green"));     //to toggle btw add & remove 
console.log(img.classList);
console.log(img.classList.toggle("green"));
console.log(img.classList);

//navigation: parentElement, children, previousElementSibling/nextElementSibling
let h4 = document.querySelector("h4");
console.log(h4.parentElement);
console.log(h4.children);

let box = document.querySelector(".box");
console.log(box.children);
console.log(box.childElementCount);

console.log(h4.nextElementSibling);
console.log(h4.previousElementSibling); //null

//adding elements:  document.createElement(" ");
let newPara = document.createElement("p");
newPara.innerText="hello i'm a new element";    //only add in js not in page;
console.log(newPara.innerText);

let body = document.querySelector("body");
body.appendChild(newPara);

let btn = document.createElement("button");
btn.innerText = "click me";
box.appendChild(btn);

newPara.append("new text using append");
console.log(newPara.innerText);

newPara.prepend("new text using prepend ");
console.log(newPara.innerText);

body.removeChild(newPara);
box.removeChild(btn);