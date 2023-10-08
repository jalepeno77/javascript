'use strict';

/** Heading text setup **/
const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const slider = document.querySelector('[type=range]');
const sizeText = document.querySelector('#size-text');

/** Initialize the page **/
initPage();

/**
 * initializes slider
 */
function initPage() {
  sizeText.textContent = slider.value + 'px';
  sizeText.style.cssText = `display: inline-block; transform: translateX(${calculateLabelPos()}px)`;
}

/** Heading text **/
form.addEventListener('submit', function (e) {
  e.preventDefault();
  let newText = document.querySelector('[name=new-heading]').value;
  h1.textContent = newText;
});

/** Text size **/
slider.addEventListener('mousemove', handleSlider);

/**
 * 
 * @param {} e When the event fires handle slider will be formatted
 * @returns Sends back a formatted slider text size
 */
function handleSlider(e) {
  let fontSize = this.value + 'px';
  h1.style.fontSize = fontSize;
  sizeText.textContent = fontSize;

  let finalPos = calculateLabelPos();
  sizeText.style.cssText = `display: inline-block; transform: translateX(${finalPos}px)`;
  return 'h1';
}

// Adapted from https://css-tricks.com/value-bubbles-for-range-inputs/
/**
 * 
 * @returns The text value enlarged in pixels under slider
 */
function calculateLabelPos(){
  const val = slider.value;
  const newVal = Number(((val - slider.min) * 100) / (slider.max - slider.min));
  sizeText.textContent = `${val}px`;
  sizeText.style.left = `${val}%`;
  sizeText.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
  return newVal;
}

/** Door game setup **/
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const innerModal = document.querySelector('#modalContent');
const outerModal = document.querySelector('#modalOuterBox');
const closeBtn = document.querySelector('#close');

btn1.addEventListener('click', buttonGame);
btn2.addEventListener('click', buttonGame);
btn3.addEventListener('click', buttonGame);

/** Game **/
/**
 * Simple button game that generates random number 1-3 then compares to door picked
 */
function buttonGame() {
  let door = parseInt(this.dataset.door);
  let prize = Math.floor(Math.random() * 3 + 1);
  door === prize ? showResult(door, prize, 'You won!') : showResult(door, prize, 'You lost :-(');
}

/** Modal **/
/**
 * 
 * @param {string} buttonClicked The door the user click on in button game
 * @param {int} randomNum The random number generated
 * @param {string} msg The string informing whether your door matched the randomly generated number
 */
function showResult(buttonClicked, randomNum, msg) {
  let content = `
  <h1>${msg}</h1>
  <p>You clicked ${buttonClicked}. The winning number was ${randomNum}.</p>
  `;
  const oldData = document.querySelector('[data-desc=content]')
  oldData ? oldData.remove() : null;
  const div = document.createElement('div');
  div.setAttribute('data-desc', 'content');
  div.innerHTML = content;
  innerModal.appendChild(div);
  outerModal.style.display = 'block';
}

closeBtn.addEventListener('click', () => modalOuterBox.style.display = 'none');
outerModal.addEventListener('click', function(e){
  if(e.target.matches('#modalOuterBox')){
    modalOuterBox.style.display = 'none';
  }
});
