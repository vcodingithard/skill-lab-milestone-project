let p = document.querySelectorAll("p");

for (let para of p) 
    {
    para.addEventListener("mouseover", () => {
        para.classList.add("hover");
    });

    para.addEventListener("mouseout", () => {
        para.classList.remove("hover");
    });
}
let hov = document.querySelectorAll(".hovertime");
let cat = document.querySelectorAll(".cat");

for (let c of cat) {
    c.addEventListener("mouseover", () => {
        c.classList.add("cathover");  
        c.querySelector(".hovertime").style.opacity = "1"; // Show the overlay
        
    });
    c.addEventListener("mouseout", () => {
        c.classList.remove("cathover");  
        c.querySelector(".hovertime").style.opacity = "0"; // Hide the overlay
       
    });
}



const dark = document.querySelector('.dark'); // Replace with the correct selector for your dark mode toggle icon
const body = document.querySelector('body'); // Ensure this selects the body element

dark.addEventListener("click", () => {
    body.classList.toggle("darkbg");
});

let home = document.querySelector(".login");
home.style.display = "none";

let r = document.querySelector("#r");
let c = document.querySelector("#c");
let loginAs = ""; // Change `const` to `let`

r.addEventListener("click", () => {
    r.style.backgroundColor = "red";
    c.style.backgroundColor = "";
    loginAs = "Retailer"; // Assign value to `loginAs`
});

c.addEventListener("click", () => {
    c.style.backgroundColor = "red";
    r.style.backgroundColor = "";
    loginAs = "Consumer"; // Assign value to `loginAs`
});

let email=document.querySelector("#e");
let pass=document.querySelector("#p");
let addbtn = document.querySelector(".adbtn");
addbtn.style.backgroundColor = "red";


const element = document.querySelector('.homedirect');
let submit = document.querySelector(".formsubmit");
let la=document.querySelector(".loginas");
submit.addEventListener("click", () => {
    home.style.display = "block";
    element.style.display = "none";
    la.innerText=loginAs;
     if(loginAs=="Consumer"){
        addbtn.style.display="none";
    }
});
