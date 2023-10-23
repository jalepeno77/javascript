'use strict';

/*
Task 1: Convert the following into an if block. When finished, change the value of num to test different scenarios, then set it back to 10.

A variable named 'num' has a value of 10.
If num is less than 10, console log "Too small"
Otherwise, if num is exactly 10, console log "perfect"
Otherwise, just console log "Too big"
*/
let num = 10;
if (num < 10) {
  console.log("Too small");
} else if (num === 10) {
  console.log("Perfect");
} else {
  console.log("Too big");
}

/*
Task 2: Convert the following into an if block. When finished, change the value of num2 to test different scenarios, then set it back to 20.

A variable named 'num2' has a value of 20
If num2 is less than 20 and evenly divisible by 2, console log "a small even number"
If num2 is 20 or greater and evenly divisble by 2, console log "a large even number"
Otherwise, console log "an odd number"
*/
let num2 = 20;
if (num2 < 20 && num2 % 2 === 0) {
  console.log("a small even number");
} else if (num2 >= 20 && num2 % 2 === 0) {
  console.log("a large even number");
} else { 
  console.log("an odd number");
}

/*
Task 3: Convert the following into an if block using coersion

If there is no SECTION tag on the page, console log "there is no section tag"
*/
if (!document.querySelector('section')) {
  console.log("there is no section tag");
}
/*
Task 4: Convert the following to a ternary operator. 
  Statement 1: variable declaration of pet
  Statement 2: Ternary if
  Statement 3: console log of petName

    let pet = 'dog';

    let petName;
    if (pet === 'dog') {
      petName = 'Brian';
    } else {
      petName = 'not a dog';
    }

    console.log(petName);
*/
let pet = 'dog';
let petName = pet === 'dog' ? 'Brian' : 'not a dog';
/*
Task 5: Convert the following if-else block to a switch
*/

// if(food === 'pizza') {
//   msg = 'You like pizza';
// } else if(food === 'cake') {
//   msg = 'You like cake';
// } else if(food === 'apples') {
//   msg = 'You like apples';
// } else {
//   msg = `You don't like anything`;
// }

let food = 'apples';
let msg;
switch (food) {
  case 'pizza':
    msg = 'You like pizza';
    break;
  case 'cake':
    msg = 'You like cake';
    break;
  case 'apples':
    msg = 'You like apples';
    break;
  default:
    msg = `You don't like anything`;
    break;
}
console.log(msg);
/*
Task 6: Typing challenge. Here's what the user experience should be:

1] Click Start (a 5 second timer starts)
2] Type your name in the text field
3] Click Done! to stop the timer
  3a] If you clicked Done! before the timer went off, display "NAME IS A WINNER" as a bold paragraph under the form. 'NAME' should be replaced with whatever was typed into the form.
  3b] If the timer went off before you finished, display "TOO SLOW" as a bold paragraph under the form
  3c] Be sure that only one paragraph displays under the form - even if you play multiple times.
4] Test it rigorously and ensure it is a pleasant user experience. Think "usability"!
5] You will need to need multiple functions to solve this. Be sure each function includes an appropriate DocBlock

The HTML form is already coded for you. Don't edit the HTML. You will need to use concepts from previous weeks to solve this.
*/

let timer;
let result = document.createElement('p');
const form = document.querySelector('form');
const startBtn = document.querySelector('input[type="button"]');
const inputTxt = document.querySelector('input[type="text"]');
const stopBtn = document.querySelector('input[type="submit"]');
stopBtn.disabled = true;

stopBtn.addEventListener('click', winner);
startBtn.addEventListener('click', tooSlow);

/**
 * 
 * @param {event} e the pointer event passed on form submit
 */
function winner(e){
  if (stopBtn.value == 'Play Again') {
    result.style.display = 'none';
    startBtn.disabled = false;
  } else {
    e.preventDefault();
    clearTimeout(timer);
    timer = null;
    let fname = inputTxt.value;
    result.style.display = 'block';
    e.target.defaultValue = 'Play Again';
    form.appendChild(result);
    if (fname != '') {
      result.innerHTML = `<strong>${fname} IS A WINNER!</strong>`;
    } else {
      result.innerHTML = `<strong>INVALID RESPONSE!</strong>`;
    }
  }
};

/**
 * 
 * @param {event} e the pointer event passed on start button click
 */
function tooSlow(e) {
  e.preventDefault();
  stopBtn.disabled = false;
  startBtn.disabled = true;
  result.style.display = 'none';
  inputTxt.value = '';
  if (timer){
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    result.innerHTML = '<strong>TOO SLOW!</strong>';
    result.style.display = 'block';
    stopBtn.value = 'Play Again';
    form.appendChild(result);
  }, 5000);
};
