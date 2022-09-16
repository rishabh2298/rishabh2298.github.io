
// document.querySelector('#xmark').style.display = "none";

document.querySelector("#navControl>i").addEventListener("click", ()=>{
    document.querySelector(".sidebar").style.display = "block";
    document.querySelector("xmark").style.display = "block";
});

document.querySelector(".sidebar>i").addEventListener("click", ()=>{
    document.querySelector(".sidebar").style.display = "none";
    document.querySelector("ham").style.display = "block";
})