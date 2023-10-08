'use strict';

window.addEventListener('click', () => console.log('You clicked the WINDOW'));

/* THIS example where this and currentTarget are not the same when used with arrow function */
document.body.addEventListener('click', e => {
  e.stopPropagation();
  console.log(this, e.currentTarget);
});

/* THIS example where this and currentTarget result in same output */
// document.body.addEventListener('click', function(e) {
//   e.stopPropagation();
//   console.log(this, e.currentTarget);
// });

const btns = document.querySelectorAll('button');
btns.forEach(handleBtnClick);

// function handleBtnClick(item, index, nodeList) {
//   console.log(item, index, nodeList);
// }


/** Propagation and bubbling example **/
// function handleBtnClick(el) {
//   el.addEventListener('click', function(e){
//     console.log('You clicked a BUTTON');
//   })
//   console.log(el);
// }


/** Stops Bubbling **/
// function handleBtnClick(el) {
//   el.addEventListener('click', function(e){
//     e.stopPropagation(); // stops the propagation
//     console.log(this);
//   });
// }

/* THIS example where this and currentTarget result in different output */
function handleBtnClick(el) {
  el.addEventListener('click', e => {
    e.stopPropagation(); // stops the propagation
    console.log(this, e.currentTarget);
  });
}

/*
this = e.currentTarget MOST OF THE TIME
*/



