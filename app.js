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

