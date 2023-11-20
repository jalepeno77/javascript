'use strict';

// const names = [
//   'john',
//   'paul',
//   'george',
//   'ringo'
// ];

// findIndex()  - returns index of first element that satisfies the condition
// forEach()   - executes a provided function once for each array element

// const georgeIndex = names.findIndex(function(beatle) {
//   if (beatle === 'george') {
//     return true;
//   } else {
//     return false;
//   }
// });

// const namesMinusGeorge = [
//   // get everything up to george
//   ...names.slice(0, georgeIndex),
//   // get everything after george
//   ...names.slice(georgeIndex + 1)
// ];

// console.log(namesMinusGeorge);

// array of objects, JSON data

// const bands = [
//   {
//     name: 'John',
//     bands: ['Beatles', 'Plastic Ono Band']
//   },
//   {
//     name: 'Paul',
//     bands: ['Beatles', 'Wings']
//   },
//   {
//     name: 'George',
//     bands: ['Beatles', 'Traveling Wilburys']
//   },
//   {
//     name: 'Ringo',
//     bands: ['Beatles', 'Rory Storm and the Hurricanes']
//   }
// ];

// function deletePerson(nameToDelete, originalArray) {
//   // find the index of the person to delete
//   // loop over each item until we get match
//   // then make new array without item
//   // return new array
//   const deleteIdx = originalArray.findIndex(item => item.name.toLowerCase() === nameToDelete.toLowerCase());
//   const newBands = [
//     ...originalArray.slice(0, deleteIdx),
//     ...originalArray.slice(deleteIdx + 1)
//   ];
//   return newBands;
// }

// const delete1 = deletePerson('George', bands);
// console.log(delete1);
// console.log(bands);


// map() - creates a new array with the results of calling a provided function on every element in the calling array
// forEach() - executes a provided function once for each array element
const abbr = document.querySelectorAll('abbr');

const arrAbbr = Array.from(abbr);

const titles = arrAbbr.map(function(itm){
  return itm.title;
});

const vh = {
  eddie: 'guitar',
  alex: 'drums',
  michael: 'bass',
  dave: 'vocals',
};

// Object.keys() - returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would
const vhKeys = Object.keys(vh);
console.log(vhKeys);

// Object.values() - returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop
const vhValues = Object.values(vh);
console.log(vhValues);

// Object.entries() - returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop
const vhEntries = Object.entries(vh);
console.log(vhEntries);