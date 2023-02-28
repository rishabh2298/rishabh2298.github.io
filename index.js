
// setTimeout(()=>{
//     alert("(⬅️) To Navigate click on Menu bar");
// },3500);

// Sidebar display section 

// document.querySelector(".sidebar").style.display = "none";
// document.querySelector("#xmark").style.display = "none";

// document.querySelector("#ham").addEventListener("click", ()=>{
//     document.querySelector(".sidebar").style.display = "block";
//     document.querySelector("#xmark").style.display = "block";
//     document.querySelector("#ham").style.display = "none";
// });

// document.querySelector("#xmark").addEventListener("click", ()=>{
//     document.querySelector(".sidebar").style.display = "none";
//     document.querySelector("#ham").style.display = "block";
//     document.querySelector("#xmark").style.display = "none";
// })


//   Projects

// let hindu = [];
// hindu[0] = "hindu1.png"
// hindu[1] = "hindu2.png"

// let hinduSection = document.querySelector("#hindu");

// let hinduIndex = 0;
// let hinduPage = setInterval(()=>{
//     if(hinduIndex==hindu.length){
//         hinduIndex = 0;
//     }
//     let image = document.createElement("img")
//     image.src = hindu[hinduIndex];
//     hinduSection.innerHTML = image;
//     hinduIndex++;
// },2000)


let sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-250px";
}


function openResume(){
    window.open("https://drive.google.com/file/d/1NNh9erGcpnTOsnT-QZYiT6JRFQn83dui/view?usp=sharing", "_blank")
}