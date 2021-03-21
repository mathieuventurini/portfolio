const burger = document.querySelector('.burger')
const nav = document.querySelector('.navigation');

burger.addEventListener('click', function(){

    burger.classList.toggle('active');
    nav.classList.toggle('navigationvisible');

});


// FONDU


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

