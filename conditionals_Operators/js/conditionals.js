'use strict';
 
const age = 25;
/* Conditional Statements */
// if (age > 55) {
//   console.log('You are a senior citizen');
// } else if (age > 21) {
//   console.log('You are an adult');
// } else {
//   console.log('You are a minor');
// }

/* Operators */
/* 
= set values
== tes value only
=== test value and type
! (bang) - tests for NOT
== !=
=== !==
< > <= >=
or ||
and &&
== should only be used when you initialize variable with no set value
*/

// if (age > 18 || age % 2 === 0) {
//   console.log('You are an adult or even');
// } else {
//   console.log('no match');
// }

/* Multiple Conditions */
if (age < 18 || (age >= 65 && age % 2 === 0)) {
  console.log('You are a minor or senior even');
} else {
  console.log('no match');
}

/* Coercion */
let fname = 'Alec';
if (fname) {
  console.log(`You have a name it is ${fname}`);
} else {
  console.log('You do not have a name');
}

/*
FALSY Values
empty string 0
undefined
null
Nan (not a number)

TRUTHY Values
string of a single space
1
negative number
arrays (even empty)
objects (even empty)
*/

/* Ternary Statement */

let num = 6;
// if (num % 2 === 0) {
//   console.log('even');
// } else {
//   console.log('odd');
// }

// condition ? true : false
num % 2 === 0 ? console.log('even') : console.log('odd');
