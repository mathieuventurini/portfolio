
let button = document.querySelectorAll(".accordion_question");


button.forEach(button => {

    button.addEventListener("click", e => {
        button.classList.toggle('open');
        let accordion = button.nextElementSibling;
        if(button.classList.contains('open')){
            accordion.style.maxHeight = accordion.scrollHeight + "px";
        }
        else {
            accordion.style.maxHeight = 0;
        }
    })
})

let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');
let btn5 = document.querySelector('.btn5');


let col1 = document.querySelector('.col1');
let col2 = document.querySelector('.col2');
let col3 = document.querySelector('.col3');
let col4 = document.querySelector('.col4');
let col5 = document.querySelector('.col5');


btn1.addEventListener('click', e => {
    btn2.classList.remove('open');
    col2.style.maxHeight = 0;
    btn3.classList.remove('open');
    col3.style.maxHeight = 0;
    btn4.classList.remove('open');
    col4.style.maxHeight = 0;
    btn5.classList.remove('open');
    col5.style.maxHeight = 0;
})
btn2.addEventListener('click', e => {
    btn1.classList.remove('open');
    col1.style.maxHeight = 0;
    btn3.classList.remove('open');
    col3.style.maxHeight = 0;
    btn4.classList.remove('open');
    col4.style.maxHeight = 0;
    btn5.classList.remove('open');
    col5.style.maxHeight = 0;
})
btn3.addEventListener('click', e => {
    btn2.classList.remove('open');
    col2.style.maxHeight = 0;
    btn1.classList.remove('open');
    col1.style.maxHeight = 0;
    btn4.classList.remove('open');
    col4.style.maxHeight = 0;
    btn5.classList.remove('open');
    col5.style.maxHeight = 0;
})
btn4.addEventListener('click', e => {
    btn2.classList.remove('open');
    col2.style.maxHeight = 0;
    btn3.classList.remove('open');
    col3.style.maxHeight = 0;
    btn1.classList.remove('open');
    col1.style.maxHeight = 0;
    btn5.classList.remove('open');
    col5.style.maxHeight = 0;
})
btn5.addEventListener('click', e => {
    btn2.classList.remove('open');
    col2.style.maxHeight = 0;
    btn3.classList.remove('open');
    col3.style.maxHeight = 0;
    btn4.classList.remove('open');
    col4.style.maxHeight = 0;
    btn1.classList.remove('open');
    col1.style.maxHeight = 0;
})