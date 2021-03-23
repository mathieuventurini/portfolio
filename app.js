

const ratio = 0.1;
const options = {
    root: null, 
    rootMargin: '0px',
    threshold: ratio 

}


const handleIntersect = function(entries, observer) {
  entries.forEach(function (entry) {
    console.log(entry.intersectionRatio)
      if(entry.intersectionRatio > ratio) {
        entry.target.classList.add('revealvisible')
        observer.unobserve(entry.target)
      } else {
        entry.target.classList.remove('revealvisible')
      }
  })

}


const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function(r) { 
  observer.observe(r)

});



const ratio1 = 0.1;
const options1 = {
    root: null, 
    rootMargin: '0px',
    threshold: ratio 

}


const handleIntersect1 = function(entries, observer) {
  entries.forEach(function (entry) {
    console.log(entry.intersectionRatio)
      if(entry.intersectionRatio > ratio1) {
        entry.target.classList.add('revealdescription')
        observer.unobserve(entry.target)
      } else {
          //entry.target.classList.remove('revealdescription')
      }
      

  })


  console.log('handleIntersect1')
}


const observer1 = new IntersectionObserver(handleIntersect1, options);
document.querySelectorAll('.descriptionhidden').forEach(function(r) { 
  observer1.observe(r)

});

// const observer1 = new IntersectionObserver(handleIntersect1, options);
// observer1.observe(document.querySelectorAll('.descriptionhidden'));
 

// BURGER

const menu = document.querySelector('.menu');
let contact = document.querySelector('.contact');

menu.addEventListener('click', function(){

    contact.classList.toggle('contact-visible');

});