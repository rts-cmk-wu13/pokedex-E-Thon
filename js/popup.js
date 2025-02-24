const popup = document.querySelector(".header__btn");
const sortList = document.querySelector(".header__popup");
const popupIcon = document.querySelector(".fa-solid.fa-hashtag");

popup.addEventListener("click", menuToggle);

function menuToggle(){
    if(sortList.style.display === "block"){
    sortList.style.display = "none";
    
    popupIcon.classList.add("fa-hashtag");
    popupIcon.classList.remove("fa-a");
    popupIcon.style.textDecoration = "none";
    } else {
    sortList.style.display = "block";
    
    popupIcon.classList.remove("fa-hashtag");
    popupIcon.classList.add("fa-a");
    popupIcon.style.textDecoration = "underline";
    } 
}
