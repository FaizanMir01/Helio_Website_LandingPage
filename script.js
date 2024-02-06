const themeChangeBtn = document.querySelector(".theme-change");
const i = document.querySelector("i");
const main = document.querySelector(".page");
const logo = document.querySelector(".logo h2");
const heroHead = document.querySelector(".left h1");
const heroPara = document.querySelector(".left p");
const btnContainer = document.querySelector(".btn-container button");
const btn2= document.getElementById("btn2");

var flag = true;
themeChangeBtn.addEventListener("click",()=>{
    console.log("clicked")
    if(flag){
        main.style.backgroundColor = "#090516";
        themeChangeBtn.classList.add("fa-sun");
        themeChangeBtn.style.borderColor="white";
        logo.style.color= "white";
        heroHead.style.color = "white";
        heroPara.style.color = "white";
        btnContainer.classList.add("themeChange");
        btn2.classList.add("themeChange");
    }else{
        main.style.backgroundColor= "#e2e2e4";
        logo.style.color= "black";
        heroHead.style.color = "black";
        heroPara.style.color = "black";
        btnContainer.classList.remove("themeChange");
        btn2.classList.remove("themeChange");
    }
    flag =!flag;
    

})