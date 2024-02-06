const themeChangeBtn = document.querySelector(".theme-change");
const i = document.querySelector("i");
const main = document.querySelector(".page");
const logo = document.querySelector(".logo h2");
const heroHead = document.querySelector(".left h1");
const heroPara = document.querySelector(".left p");
const btnContainer = document.querySelector(".btn-container button");

var flag = true;
themeChangeBtn.addEventListener("click",()=>{
    console.log("clicked")
    if(flag){
        main.style.backgroundColor = "#090516";
        themeChangeBtn.classList.add("fa-moon");
        logo.style.color= "white";
        heroHead.style.color = "white";
        heroPara.style.color = "white";
    }else{
        main.style.backgroundColor= "#e2e2e4";
        themeChangeBtn.classList.add("fa-sun");
        logo.style.color= "black";
        heroHead.style.color = "black";
        heroPara.style.color = "black";
    }
    flag =!flag;
    

})