const burger = document.querySelector(".burger");
const menuBefore1024 = document.querySelector(".menu__before1024");
const closeIcon = document.querySelector(".closeicon");
burger.addEventListener('click' , () => menuBefore1024.classList.toggle("showMenu"));
closeIcon.addEventListener('click' , () => menuBefore1024.classList.remove("showMenu"),() => popupform.classList.remove("hidden"));

const popupform = document.querySelector(".popup");
const buttonwriteus = document.querySelector(".btn__mob");
const closeiconpopupform = document.querySelector(".closeicon__popupform")
buttonwriteus.addEventListener('click' , () => popupform.classList.toggle("hidden"));
closeiconpopupform.addEventListener('click' ,() => popupform.classList.remove("hidden"));


