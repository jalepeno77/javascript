'use strict';

/* for runs a block of code a number of times */
for(let i = 0; i < 10; i++){
  // console.log(i);
}

for(let i = 100; i >= 0; i -= 25){
  // console.log(i);
}

const names = ['john', 'paul', 'george', 'ringo'];
for(let i = 0; i < names.length; i++){

  // console.log(names[i]);
}

/* forOf loops over interables/ anything with length */
for(const item of names){
  // console.log(item, names);
}

let str = 'This is a string of text.';
for(const char of str){
  // console.log(char, str);
}

/* forIn loops over keys/indexes/objects */
for(const itm in names){
  console.log(itm, names[itm]);
}

const johnDetails = {
  first: 'John',
  last: 'Lennon',
  dob: 'October 9, 1940',
  dod: 'December 8, 1980',
  spouse: 'Yoko Ono',
}

// for(const itm in johnDetails){
//   console.log(`${itm}: ${johnDetails[itm]}`);
// }

const arrJohn = Object.entries(johnDetails);
for(const itm of arrJohn){
  console.log(`${itm[0]}: ${itm[1]}`);
}

/* while loops runs infinitely until condition is false, not guaranteed to run at all */

let i = 1;
while(i < 10){
  console.log(i);
  i++;
}

/* do while loops runs once and then checks condition */

let j = 10;
do{
  console.log(j);
  j++;
} while(j < 20);
