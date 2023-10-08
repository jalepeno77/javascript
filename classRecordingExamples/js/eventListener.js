'use strict';

const btn1 = document.querySelector('button');

btn1.addEventListener('click', function() {
  console.log('You clicked me');
})

btn1.addEventListener('dblclick', handleDblClick);

function handleDblClick() {
  console.log('You double-clicked!');
}