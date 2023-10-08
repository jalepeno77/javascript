'use strict';

document.body.addEventListener('click', bodyGame);

function bodyGame(evt) {
  evt.preventDefault();
  console.log(evt.currentTarget, evt.target, evt);
  if(evt.currentTarget === evt.target) {
    console.log('Winner');
  }else {
    console.log('You lost');
  }
}

// use forEach() to iterate and attach event listener
// stop forms/links evt.preventDefault()
// stop bubbling evt.stopPropagation()

// evt.target = what was clicked
// evt.currentTarget what listened/responded to the event.
