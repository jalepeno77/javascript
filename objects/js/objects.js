'use strict';

let age = 30;

const person = {
  name: 'Max',
  age,
  'hair-color': 'black',
  'shoe size': 10,
  isDeceased: true,
  address: {
    street: 'Main street',
    city: 'Boston',
    state: 'MA',
    zip: '12345',
  },
  greeting(msg = "Hello") {
    return `${msg} ${this.name}!`;
  },
  toggleDeceased() {
    this.isDeceased = !this.isDeceased;
  },
};

// const checkThis = prompt('Check which property?');
// console.log(person[checkThis]);

// add/update property
person.spouse = 'Jane';
person.pet = 'dog';
person.pet = 'cat';

// delete property
delete person.spouse;

// object constructor

function Character(charName, catchPhrase){
  this.fname = charName,
  this.phrase = catchPhrase,
  this.speak = function(){
    return `${this.fname} says ${catchPhrase}`;
  }
}

const peter = new Character('Peter', 'I am Peter');
const stewie = new Character('Stewie', 'Victory is mine!');
const lois = new Character('Lois', 'Peter!');
console.log(peter.speak());
console.log(stewie.speak());
console.log(lois.speak());


/* true SHALLOW copy */
let pet1 = {
  pet: 'bird',
};
let pet2 = {...pet1};
// let pet2 = Object.assign({}, pet1); Deprecated way
console.log(pet1, pet2);

pet2.pet = 'cat';
console.log(pet1, pet2);

// let auto1 = {
//   mfg: 'Honda',
//   models: {
//     top: 'Civic',
//     bottom: 'Prelude',
//   },
// };
// let auto2 = {...auto1};
// console.group('Before edit');
// console.table(auto1);
// console.table(auto2);
// console.groupEnd();

// auto2.mfg = 'Ford';
// auto2.models.top = 'F-series';
// console.group('After edit');
// console.table(auto1);
// console.table(auto2);
// console.groupEnd();

/* true full copy using LODASH 
https://www.unpkg.com/lodash
*/

let auto3 = {
  mfg: 'Honda',
  models: {
    top: 'Civic',
    bottom: 'Prelude',
  },
};
let auto4 = _.cloneDeep(auto3);

auto4.mfg = 'Ford';
auto4.models.top = 'F-series';
console.group('Before edit');
console.table(auto3);
console.table(auto4);
console.groupEnd();

/* merge objects */
const merch= {
  tshirts: 100,
  posters: 50,
}

const music = {
  cds: 25,
  vinyl: 10,
  cassettes: 5,
}

const inventory = {
  ...merch,
  ...music,
  usb: 13,
};
