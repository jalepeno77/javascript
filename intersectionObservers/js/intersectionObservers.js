'use strict';

/* Deprecated Window Scroll Event Listener */

// const body = document.body;
// window.addEventListener('scroll', handleScroll);

// function handleScroll() {
//   let bodyHeight = body.offsetHeight;
//   let viewportHeight = window.innerHeight;
//   let scrollDistance = window.scrollY;
//   let totalSeen = scrollDistance + viewportHeight;
//   console.log(`
//   bodyHeight: ${bodyHeight}
//   viewportHeight: ${viewportHeight}
//   scrollDistance: ${scrollDistance}
//   totalSeen: ${totalSeen}`);

//   if(totalSeen >= bodyHeight){
//     body.style.cssText ='background: black; color: white;'
//     console.log(`You've reached the bottom of the page!`);
//   }
//   else{
//     body.style.cssText ='background: white; color: black;'
//   }
// }

/* Updated Window Scroll Event Listener */
const body = document.body;

const lastP = document.querySelector('p:last-of-type');
const h2 = document.querySelector('h2');
const watcher = new IntersectionObserver(handleScroll);
watcher.observe(h2);
watcher.observe(lastP);

function handleScroll(payload){
  console.log(payload[0].isIntersecting);
  if(payload[0].isIntersecting){
    body.style.cssText ='background: black; color: white;'
  }else{
    body.style.cssText ='background: white; color: black;'
  }
}


