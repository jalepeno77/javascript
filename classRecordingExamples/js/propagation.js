'use strict';

const links = document.querySelectorAll('a');
const form = document.querySelector('form');

links.forEach(function(link) {
  link.addEventListener('click', stopIt);
});

form.addEventListener('submit', stopIt);

function stopIt(e) {
  e.preventDefault();
}

document.body.addEventListener('click', whatWasClicked);

function whatWasClicked(e){
  console.log(e, e.currentTarget, e.target, this);
}
