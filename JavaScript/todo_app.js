let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    inp.value="";

    let delBtn = document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
});

// let delbtns = document.querySelectorAll(".delete");     //only add for existing elements not for new added elements
// for(del of delbtns){
//     del.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     })
// }

//event delegation - so add event for parent element
ul.addEventListener("click", function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("dlete");
    }
});