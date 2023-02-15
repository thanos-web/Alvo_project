const burger = document.querySelector(".burger")
const menuBefore1024 = document.querySelector(".menu__before1024")
const closeIcon = document.querySelector(".closeicon");
burger.addEventListener('click' , () => menuBefore1024.classList.toggle("showMenu"));
closeIcon.addEventListener('click' , () => menuBefore1024.classList.remove("showMenu"));
