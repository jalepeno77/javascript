'use strict';

const btn = document.querySelector('button');
btn.addEventListener('click', handleBtn);


function handleBtn(){
  console.log('Button clicked!');
}

const theEnd = document.getElementById('theEnd');
const ob = new IntersectionObserver(enableBtn);
if(theEnd) {
  ob.observe(theEnd);
  console.log(theEnd);
}


function enableBtn(scrollInfo){
  console.log(scrollInfo[0].isIntersecting);
  if(scrollInfo[0].isIntersecting){
    btn.disabled = false;
    ob.disconnect();
  }else{
    btn.disabled = true;
  }
}