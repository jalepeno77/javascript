'use strict';

/*
For every task requiring console output - wrap your console.table() or console.log() statement(s) within a console.group() that indicates the task number. For example:

console.group('Task 1');
console.table(computer);
console.groupEnd();

This will provide a label for each console output, making it much easier to read! Note that not every task requires you to log something to the console.
*/

/*
NOTE: For tasks 1, 2, and 3, I want the HREF value you extract to be an exact match of what's hard-coded in the HTML
*/


/*
Task 1: Iterate through the DOM and integrate event listeners
- Loop through the DOM, getting every hyperlink (use getElementsByTagName) and storing them in a variable named: links
- Iterate through the collection of links, adding a click event listener to each one
  - You'll need to convert the HTMLCollection to an array in order to use forEach()
- When a link is clicked, the following should happen:
  - The default behavior of the link should be disabled so that the link doesn't work
  - The console should display the text of the clicked link, followed by a colon and then the href of the clicked link. For example:
  Google: https://google.com/ or Some Page: some-local-page.html
*/
const links = document.getElementsByTagName('a');
const linksArray = Array.from(links);
linksArray.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    let result = `${link.innerText}: ${link.getAttribute('href')}`;
    console.group('Task 1');
    console.log(result);
    console.groupEnd();
  });
});

/*
Task 2: Iterate through an array, performing a function on each member
- Iterate over your collection of links from the previous task. If a link's HREF includes "http", then append the emoji arrow ↗️ to the link's text so that users know it links to an external site.
- Use map()
*/
linksArray.map(link => link.getAttribute('href').includes('http') ? link.innerText += ' ↗️' : link.innerText);

/*
Task 3: Iterate over an array to find all members meeting criteria
- Iterate over your collection of links from the previous task. If a link's HREF includes "http", then add that anchor element to an array named: externalLinks.
- Log (not table) the externalLinks array to the console
*/
let externalLinks = [];
externalLinks = linksArray.filter(link => link.getAttribute('href').includes('http'));
console.group('Task 3');
console.log(externalLinks);
console.groupEnd();

/*
Task 4: Iterate over an array to find the first member meeting criteria
- Iterate over your collection of links from the previous task. Find the first anchor who's HREF DOES NOT include "http"
- Log that anchor element to the console
*/
linksArray.find(link => {
  if (!link.getAttribute('href').includes('http')) {
    console.group('Task 4');
    console.log(link);
    console.groupEnd();
  }
});

/*
Task 5: Run a block of code n times
- Create a loop that creates four P elements, each with the text: This is paragraph #n
  - n should be an incrementing number starting at 1
  - each paragraph should be appended to the body and render in the viewport
*/
const body = document.querySelector('body');
for (let i = 1; i <= 4; i++) {
  const p = document.createElement('p');
  p.innerText = `This is paragraph # ${i}`;
  body.appendChild(p);
}

/*
Task 6: Iterate over an array
- use the theRealVanHalen array provided below
- Display each array member in the console, one at a time
- Use the appropriate kind of 'for' loop
	- Hint: You shouldn't have to initialize or use a counter
*/
const theRealVanHalen = ['eddie', 'alex', 'david', 'michael'];
for (let member of theRealVanHalen) {
  console.log(member);
}

/*
Task 7: Iterate over an object
- use the theFakeVanHalen object provided below
- Display each band member's name (not their instrument) in the console, one at a time
- Use the appropriate kind of 'for' loop
	- Hint: You shouldn't have to initialize or use a counter
*/
const theFakeVanHalen = {
  eddie: 'guitar',
  alex: 'drums',
  michael: 'bass',
  sammy: 'vocals',
}

for (let member in theFakeVanHalen) {
  console.log(member);
}
