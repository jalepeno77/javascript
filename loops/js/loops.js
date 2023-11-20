'use strict';

const str = 'This is a string';
const arr = ['A', 'a', 2, 3, 4, 5];
const obj = {
  content: 'HTML',
  presentation: 'CSS',
  behavior: 'JS',
};
const linksQuery = document.querySelectorAll('a');
const linksTag = document.getElementsByTagName('a');

// forEach() method only works with arrays, will not return anything
// const myVar = arr.forEach(listAll);
// console.log(myVar);

// function listAll(item){
  //   console.log(item);
  //   return 'I have been returned';
  // }
  
// map() method only works with arrays, will return a new array
// const myVar = arr.map(listAll);
// console.log(myVar);

// function listAll(item, idx){
//   console.log(item);
//   return idx;
// }

// Refactoring evolution
// const evens = arr.find(function(item){
//   if(item % 2 === 0){
//     return item;
//   }
// });

// const evens = arr.find(item => {
//   if(item % 2 === 0){
//     return item;
//   }
// });

// const evens = arr.find(item => {
//   return item % 2 === 0;
// });

// Final Advanced
// const evens = arr.find(item => item % 2 === 0); // one match
// const evens2 = arr.filter(item => item % 2 === 0); // all matches
// console.log(evens);
// console.log(evens2);

// loop evolution
// for()
// for(let i = 0; i < linksQuery.length; i++){
//   console.log(linksQuery[i].textContent);
// };

// for of - loop over interables / interables are anything with LENGTH / objects are not interables
// for (const item of linksTag) {
//   console.log(item);
// }

// for in - loop over object keys / loop over keys (index)
// const objKeys = Object.keys(obj);
// for (const key in obj) {
//   console.log(key);
// }

// while() - loop while condition is true, never guaranteed to run
// do while() - loop while condition is true, guaranteed to run at least once
let i = 0;
// while (i > 10){
//   console.log(linksQuery[i]); // will never run because of WHILE condition
//   i++;
// }
do {
  console.log(linksQuery[i].textContent); // will run at least once because of DO
  i++;
} while (i < linksQuery.length);