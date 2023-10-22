'use strict';

/* Switch Block - only tests for equality*/

const fname = 'Sue';

// if(fname === '') {
//   console.log('no name given');
// } else if(fname === 'Bob') {
//   console.log('hi Bob');
// } else if(fname === 'Sue') {
//   console.log('hi Sue');
// } else {
//   console.log('hi Stranger');
// }

// switch(fname) {
//   case '':
//     console.log('no name given');
//     break;
//   case 'Bob':
//     console.log('hi Bob');
//     break;
//   case 'Sue':
//     console.log('hi Sue');
//     break;
//   default:
//     console.log('hi Stranger');
//     break;
// }

window.addEventListener('keydown', handleKeys);

function handleKeys(e) {
  const p = document.querySelector('p');
  let fs = parseInt(p.style.fontSize);
  if(!fs) {
    fs = 16;
  }
  if (!e.key.includes('Arrow') || !e.altKey) return;
  switch(e.key) {
    case 'ArrowUp':
      fs ++;
      break;
    case 'ArrowRight':
      fs ++;
      break;
    case 'ArrowDown':
      fs --;
      break;
    case 'ArrowLeft':
      fs --;
      break;
    default:
      console.log('Invalid key');
      break;
  }
  p.style.fontSize = `${fs}px`;

  console.log(fs);
}

/* 
Timers - delay something from running ONCE by x-seconds
*/

setTimeout(() => {console.log('2 seconds have passed')}, 2000);

setTimeout(timesUp, 2000);

function timesUp() {
  console.log('2 seconds have passed');
};

/* 
Intervals - run running REPEATEDLY by x-seconds
*/

const reminderFirst = setInterval(() => {console.log('2 seconds have passed')}, 2000);

const reminderSecond = setInterval(reminder, 2000);

function reminder() {
  console.count('2 seconds have passed');
};

document.querySelector('p').addEventListener('click', stopTimer);
setTimeout(stopTimer, 10000);


function stopTimer() {
  clearInterval(reminderFirst);
  clearInterval(reminderSecond);
  console.log('timer stopped');
};
