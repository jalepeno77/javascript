'use strict';

window.addEventListener('click', () => console.log('You clicked the WINDOW'));

document.body.addEventListener('click', e => {
  e.stopPropagation();
  console.log('You clicked the BODY');
});

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
function handleBtnClick(el) {
  el.addEventListener('click', function(e){
    e.stopPropagation(); // stops the propagation
    console.log('You clicked a BUTTON');
  })
  console.log(el);
}

/*
this = e.currentTarget MOST OF THE TIME
*/



