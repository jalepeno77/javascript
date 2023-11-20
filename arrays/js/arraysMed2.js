'use strict';

const guitars = [
  'fender',
  'gibson',
  'ibanez'
];

// toString() - returns a string representing the specified array and its elements
const gtrString = guitars.toString();
// console.log(gtrString);

// join() - returns a string with all array elements joined and delimiter
const gtrJoined = guitars.join(' | ');
// console.log(gtrJoined);

// split() - splits a string into an array of substrings
const strings = `d'addario; elixir; ernie ball`;
const arrStrings = strings.split(';');
// console.log(arrStrings);

// trim() - removes whitespace from both ends of a string
// const arrTrimmedStrings = arrStrings.map(function(itm){
//   return itm.trim();
// });

const arrTrimmedStrings = arrStrings.map(itm => itm.trim());

// concat() - merges two or more arrays
const moreGtrs = [
  'gretsch',
  'epiphone'
];
const allGtrs = guitars.concat(moreGtrs);

// indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present
const arrRaces = [
  'relay',
  'sprint',
  'marathon',
  'sprint',
];
const result = arrRaces.indexOf('sprint');
const result2 = arrRaces.lastIndexOf('sprint');


// finding out what page you are on example
let url = window.location.href;
let slash = url.indexOf('/');
let lastSlash = url.lastIndexOf('/');
let page = url.substring(lastSlash + 1);

//includes() - determines whether an array includes a certain value among its entries, returning true or false as appropriate
const arrTodaysRaces = [
  'relay',
  'sprint',
  'marathon',
];
let isRace = arrTodaysRaces.includes('marathon');

