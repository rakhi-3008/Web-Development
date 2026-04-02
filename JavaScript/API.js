//using fetch

let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((response) => {
//     console.log(response);
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })

//using fetch with async/await

// async function getFacts() {
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data);
//     }catch(e){
//         console.log(e);
//     }
//     console.log("bye");
// };
// console.log(getFacts());
// console.log("hello");

//using axios

async function getFacts() {
    try{
        let res = await axios.get(url);
        console.log(res.data.fact);
    }catch(e){
        console.log(e);
    }
};
getFacts();


