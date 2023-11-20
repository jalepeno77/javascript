'use strict';

const names = ['john', 'jane', 'mark', 'james', 'joe'];

/* const namesRev = names.reverse();  reverse() mutates the original array */
// console.log(names[names.length - 1]);
// console.log(namesRev);
// console.log(names);

// const someNames = names.slice(1, 3); /* immutable, slice() does not mutate the original array */

// console.log(someNames);
// console.log(names);

// const namesRev = [...names]; /* immutable, spread operator does not mutate the original array */
// namesRev.reverse();
// console.log(namesRev);
// console.log(names);

// add items to END with push()

// names.push('julie');
// names.push('jim');
// console.log(names);

// add items to BEGINNING with unshift()

// names.unshift('herb', 'harry');
// console.log(names);

// remove items from BEGINNING with shift()

// names.shift();
// console.log(names);

// remove items from END with pop()

// names.pop();
// console.log(names);

// console.group('Names Before');
// console.log(names);
// console.groupEnd();

// const sliced = names.splice(1); // mutable, remove all items from index 1 onwards
// console.group('Names After');
// console.log(sliced);
// console.groupEnd();

// const allNames = [
//   ...names.slice(0, 2),
//   'pete',
//   'paul',
//   ...names.slice(2)
// ];

// console.log(allNames, names);

// const spliceNames = [
//   ...names.splice(0, 2),
//   /* names = ['mark', 'james', 'joe'] */
//   'pete',
//   'paul',
//   ...names
// ]

// console.log(allNames, spliceNames);


// Remove items from array
const namesRemove = [
  ...names.slice(0, 1),
  ...names.slice(2)
];

console.log(namesRemove, names);

const namesRemoveSplice = [
  ...names.splice(0, 1),
  ...names.splice(1)
];

console.log(namesRemoveSplice, names);
