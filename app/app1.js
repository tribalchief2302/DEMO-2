let url="https://catass.com";
let btn=document.querySelector("button");

btn.addEventListener("click", async()=>{
    let country=document.querySelector("input").value;
    console.log(country);
})












 




























// let url="https://cataas.com";
// let btn=document.querySelector("button");

// btn.addEventListener("click", async()=>{
//     let country=document.querySelector("input").value;
//     console.log(country);

//     let colarr=await getcolleges(country);
//     Show(colarr);
// });

// function Show(colarr){
//     let list=document.querySelector("#list");
//     list.innerText="";
//     for (col of colarr){
//         console.log(col.name);

//         let li=document.createElement("li");
//         li.innerText=col.name;
//         list.appendChild(li);
//     }
// }


// let btn=document.querySelector("button");
// let url2="https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async()=>{
//     let link=await getImage();
//     let img=document.querySelector("#result");
//     img.setAttribute("src", link);
//     console.log(link);
// });

// async function getImage() {
//     try{
//         let res=await axios.get(url2);
//         return res.data.message;
//     }catch(err){
//         console.log("error", err);
//         return "/";
//     }
// };