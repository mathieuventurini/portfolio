

const ratio = 0.1;
const options = {
    root: null, // zone d'affichage 'racine', null car l'élément n'est pas visible au départ
    rootMargin: '0px',
    threshold: ratio // 10% de l'élément = visible déclenche lanim

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
//  ce qui va observer la page >  handleIntersect = callback = action qui sera executé lorsque l'élément sera visible ou se masquera / 

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function(r) { 
  observer.observe(r)

});


// meme chose sur la description du site /////////////////////////////////////////

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


/////////////////// 

const enveloppe = document.getElementById('enveloppe');
const contact = document.querySelector('.contact');

let animation = enveloppe.addEventListener('click', function(){

  contact.classList.toggle('revealvisible');

});


const symboleEnveloppe = document.querySelector('.enveloppesymbole');
const span1 = document.querySelector('.span1');
const span2 = document.querySelector('.span2');


enveloppe.addEventListener('click', function(){

  symboleEnveloppe.classList.toggle('cross')
  span1.classList.toggle('spananimation')
  span2.classList.toggle('spananimation')


})

// Curseur //////

// let mouseCursor = document.querySelector('.cursor');

// window.addEventListener('mousemove', cursor);

// function cursor(e){

//   mouseCursor.style.top = e.pageY + 'px';
//   mouseCursor.style.left = e.pageX + 'px';

// }



// let title = document.querySelectorAll('.title')

// title.forEach(whiteborder =>{

//   whiteborder.addEventListener('mouseover', () =>{
   
//     mouseCursor.classList.add('cursorontitle');
//   })
//   whiteborder.addEventListener('mouseleave', () =>{

//     mouseCursor.classList.remove('cursorontitle');
// })


// })