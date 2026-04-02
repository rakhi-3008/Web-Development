let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let collegesArr = await getColleges(country);
    show(collegesArr);
})

function show(collegesArr){
    let list = document.querySelector("#list");
    for (col of collegesArr){
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try{
        let res= await axios.get(url+country);
        return res.data;
    }catch(e){
        console.log(e);
        return [];
    }
}