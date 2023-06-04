const burger = document.querySelector(".burger");
const menuBefore1024 = document.querySelector(".menu__before1024");
const closeIcon = document.querySelector(".closeicon");
burger.addEventListener('click', () => menuBefore1024.classList.toggle("showMenu"));
closeIcon.addEventListener('click', () => menuBefore1024.classList.remove("showMenu"), () => popupform.classList.remove("hidden"));

// const popupform = document.querySelector(".popup");
// const buttonMob = document.querySelector(".btn__mob");
// const closeiconpopupform = document.querySelector(".closeicon__popupform");
// const overlay = document.querySelector(".overlay");

// buttonMob.addEventListener('click', () =>
//     overlay.classList.toggle("show"));
// buttonMob.addEventListener('click', () =>
//     popupform.classList.toggle("show"));
// closeiconpopupform.addEventListener('click', () =>
//     popupform.classList.toggle("show"));
// closeiconpopupform.addEventListener('click', () =>
//     overlay.classList.toggle("show"));



const popupImage = document.querySelector(".popupImage");
const closeIconPopup = document.querySelector(".closeicon__popupimg");
const overlayImage = document.querySelector(".overlayImage");
const imageContainers = document.querySelectorAll('.product__item');
const popupImg = document.querySelector('.popupImage img');


closeIconPopup.addEventListener('click', () => {
    overlayImage.classList.add('hidden')
})

overlayImage.addEventListener('click', () => {
    overlayImage.classList.add('hidden')
})

imageContainers.forEach(container => {
    container.addEventListener('click', () => {
        popupImg.src = container.querySelector('img').src
        overlayImage.classList.remove('hidden');
    })
})