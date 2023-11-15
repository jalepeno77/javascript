'use strict';
/**********************
 *********************
NOTE: In my comments, I've referred to functions with their parenthesis. Example: someFunction()
That does not mean you should always use the parenthesis in your code. Sometime you would use someFunction (when referencing it) while other times you'd use someFunction() (when running it).
**********************
*********************/


// Global variables
/*
  Store the #style-picker element in a variable for use across multiple functions. The variable should be named: picker
*/
let picker = document.querySelector('#style-picker');

// SHOW PICKER MENU
/*
  - Bind a click listener to the #theme element, calling showPickerMenu() when clicked
  - Run showPickerMenu() after 5 seconds of page load
  - Create the showPickerMenu() function with a single statement - to show the picker menu via CSS display property
*/
let theme = document.querySelector('#theme');
theme.addEventListener('click', showPickerMenu);
setTimeout(showPickerMenu, 5000);


function showPickerMenu() {
  picker.style.display = 'block';
}
// setAttribute('dataset', 'stylesheet');
// LISTEN FOR BUTTON CLICKS
/*
  - Store all buttons in a variable
  - Loop through the buttons, binding a click listener to each
    The click listener should call handleOptions(), passing it the clicked button element
*/
let buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', function() {
  handleOptions(button);
}));


// HANDLE OPTIONS
/**
 * 
 * @param {element} el the element passed from the button event listener
 */
function handleOptions(el) {
  /*
  - Switch with 4 cases plus a default
      For each case, call loadStyles, passing it the stylesheet name (minus the file extension), the button element itself, and a text string for page display. HINT: You can tell which button was clicked by it's ID.
  - If no theme button is clicked (I like the current theme), close the picker via CSS display property
  */
  switch (el.id) {
    case buttons[0].id:
      loadStyles('default', el, buttons[0].innerText);
      break;
    case buttons[1].id:
      loadStyles('grayscale', el, buttons[1].innerText);
      break;
    case buttons[2].id:
      loadStyles('high-contrast', el, buttons[2].innerText);
      break;
    case buttons[3].id:
      loadStyles('clown', el, buttons[3].innerText);
      break;
    default:
      picker.style.display = 'none';
      break;
  }
}

// LOAD STYLES
const styleLink = document.querySelector('link[rel="stylesheet"]');

/**
 * 
 * @param {string} sheet string passed from handleOptions() to determine which stylesheet to load
 * @param {element} btn the element passed from handleOptions() to determine which button was clicked
 * @param {string} str the string passed from handleOptions() to determine which text to display on the page
 */
function loadStyles(sheet, btn, str) {
  /*
  - Loop through the buttons, setting each one to enabled. 
      - HINT: The buttons are already stored in a global variable from earlier for easy access.
      - HINT: To enable a button, set its disable property to false
      - HINT: If you use an arrow function for the callback, this can be a single line of code.
  - Set the HREF of the appropriate link tag to the passed theme
  - Change the #theme text to that of the passed theme
  - Set the clicked button (passed to function) to disabled
  - Hide the picker box via CSS display property
  */
  buttons.forEach((button) => button.disabled = false);
  styleLink.setAttribute('href', `css/theme-${sheet}.css`);
  theme.textContent = str;
  btn.setAttribute('disabled', 'true');
  picker.style.display = 'none';
  ;
}

// COLOR MORPH SETUP
/*
  When morph box is clicked, call morph(), passing along the clicked button itself
    -HINT: Use an arrow function for the callback and you can do this is a single line of code
*/

/*
  Plan ahead! Create a variable to store the interval ID. Name the variable: morphID
*/

// COLOR MORPH FUNCTION
let morphBox = document.querySelector('#morph');
let morphID;
morphBox.addEventListener('click', () => morph(morphBox));
/**
 * 
 * @param {element} morphBox the element passed from the morphBox event listener
 */
function morph(morphBox) {
  /* 
  - If the box is checked:
      - call randomizeDegrees every 5 seconds, storing the interval in the morphId variable
      - console log "turning ON morph ID 123" with the actual ID#
      - exit the function
  - Stop randomizeDegrees from running
  - Console log "turning OFF morph ID 123" with the actual ID#
  - Call changeColor, passing it 0 so that the color is reset
  */
  if (morphBox.checked) {
    morphID = setInterval(randomizeDegrees, 5000);
    console.log(`Turning ON morph ID ${morphID}`);
    return;
  } else {
    clearInterval(morphID);
    console.log(`Turning OFF morph ID ${morphID}`);
    changeColor(0);
  }
}

/**
 * Generate a random number between 0-360 (inclusive) and pass that number to changeColor()
 *  Note that any range will work, but it defaults to 0 - 360
 *  Why 0 and 360? Because that defines the full degree range of a circle, or the color wheel
 *  The generated number is passed to changeColor
 * @param {number} min minimum random number to generate, inclusive
 * @param {number} max maximum random number to generate, inclusive
 */
function randomizeDegrees(min = 0, max = 360) {
  let num = Math.floor(Math.random() * (max - min + 1) + min);
  changeColor(num);
}

/**
 * Apply CSS hue filter to HTML tag
 *  Uses the random number passed from randomizeDegrees to rotate that many degrees on the color wheel from the old/current color to a new color
 *  Uses CSS filter to change the color and CSS transition to 'animate' the color change
 * @param {num} degree value passed from randomizeDegrees
 */
function changeColor(degree) {
  document.querySelector('html').style.cssText = `filter: hue-rotate(${degree}deg); transition: all 5s;`;
}
