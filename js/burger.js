const burger = document.querySelector(".header__btn");
const sortList = document.querySelector(".header__burger");
const burgerIcon = document.querySelector(".fa-solid.fa-hashtag");

burger.addEventListener("click", menuToggle);

function menuToggle(){
    if(sortList.style.display === "block"){
    sortList.style.display = "none";
    
    burgerIcon.classList.add("fa-hashtag");
    burgerIcon.classList.remove("fa-a");
    burgerIcon.style.textDecoration = "none";
    } else {
    sortList.style.display = "block";
    
    burgerIcon.classList.remove("fa-hashtag");
    burgerIcon.classList.add("fa-a");
    burgerIcon.style.textDecoration = "underline";
    } 
}
