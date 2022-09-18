
// setTimeout(()=>{
//     alert("(⬅️) To Navigate click on Menu bar");
// },3500);

// Sidebar display section 

document.querySelector(".sidebar").style.display = "none";
document.querySelector("#xmark").style.display = "none";

document.querySelector("#ham").addEventListener("click", ()=>{
    document.querySelector(".sidebar").style.display = "block";
    document.querySelector("#xmark").style.display = "block";
    document.querySelector("#ham").style.display = "none";
});

document.querySelector("#xmark").addEventListener("click", ()=>{
    document.querySelector(".sidebar").style.display = "none";
    document.querySelector("#ham").style.display = "block";
    document.querySelector("#xmark").style.display = "none";
})
