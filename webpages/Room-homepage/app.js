

// MENU HOVER

let menuItems = document.querySelectorAll('li');
let underline = document.querySelectorAll('hr');


menuItems.forEach(menuItems => {

    menuItems.addEventListener("mouseenter", e => {
        menuItems.classList.add('active');
    })
    menuItems.addEventListener("mouseleave", e => {
        menuItems.classList.remove('active');
    })
});


// SLIDER

let slider_img = document.querySelectorAll('.slider-img');
let nbSlide = slider_img.length;
let slider_txt = document.querySelectorAll('.rp-s1-content')

let leftBtn = document.querySelector('.previous-btn');
let rightBtn = document.querySelector('.next-btn');
let count = 0;



function nextSlide(){
    slider_img[count].classList.remove('active');
    slider_txt[count].classList.remove('active');
    if(count < nbSlide -1){
        count++;
    }
    else{
        count = 0;
    }

    slider_img[count].classList.add('active');
    slider_txt[count].classList.add('active');
}


function previousSlide(){
    slider_img[count].classList.remove('active');
    slider_txt[count].classList.remove('active');
    if(count > 0){
        count--;
    }
    else{
        count = nbSlide - 1;
    }

    slider_img[count].classList.add('active');
    slider_txt[count].classList.add('active');

}

leftBtn.addEventListener('click', previousSlide);
rightBtn.addEventListener('click', nextSlide);



// RESPONSIVE

let slider_imgMobile = document.querySelectorAll('.slider-img-mobile')
let nbSlideMobile = slider_imgMobile.length;
let leftBtnMobile = document.querySelector('.previous-btn-mobile')
let rightBtnMobile = document.querySelector('.next-btn-mobile')


function nextSlideMobile(){
    slider_imgMobile[count].classList.remove('active');
    slider_txt[count].classList.remove('active');
    if(count < nbSlideMobile -1){
        count++;
    }
    else{
        count = 0;
    }

    slider_imgMobile[count].classList.add('active');
    slider_txt[count].classList.add('active');
}


function previousSlideMobile(){
    slider_imgMobile[count].classList.remove('active');
    slider_txt[count].classList.remove('active');
    if(count > 0){
        count--;
    }
    else{
        count = nbSlideMobile - 1;
    }

    slider_imgMobile[count].classList.add('active');
    slider_txt[count].classList.add('active');

}

leftBtnMobile.addEventListener('click', previousSlideMobile);
rightBtnMobile.addEventListener('click', nextSlideMobile);


// BURGER MENU


let burger = document.querySelector('.burger');
let menu_mobile = document.querySelector('.left-part-section1');
let darkPage = document.querySelector('.darkpage');

burger.addEventListener('click', function(){

    burger.classList.toggle('active');
    menu_mobile.classList.toggle('active');
    darkPage.classList.toggle('active');

});