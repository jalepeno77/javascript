'use strict';
const data = [
  {
    name: {
      first:'John',
      last: 'Lennon'
    },
    dob:'October 9, 1940',
    dod:'December 8, 1980'
  },
  {
    name: {
      first:'Paul',
      last: 'McCartney'
    },
    dob:'June 18, 1942'
  },
  {
    name: {
      first:'George',
      last: 'Harrison'
    },
    dob:'February 25, 1943',
    dod:'November 29, 2001'
  },
  {
    name: {
      first:'Ringo',
      last: 'Star'
    },
    dob:'July 7, 1940'
  },
];

const renderPeople = data.map(function(beatle){
  const dob = new Date(beatle.dob).getTime();
  const dod = new Date(beatle.dod).getTime();
  const now = Date.now();
  
  if(dod){
    const age = Math.floor((dod - dob) / 31536000000); // 1000 * 60 * 60 * 24 * 365.25 converts milliseconds to years
    return {
      isDeceased: true,
      age,
      name: `${beatle.name.first} ${beatle.name.last}`
    }
  }
  const age = Math.floor((now - dob) / 31536000000); // 1000 * 60 * 60 * 24 * 365.25 converts milliseconds to years
  return {
    isDeceased: false,
    age,
    name: `${beatle.name.first} ${beatle.name.last}`
  }
});

console.log(renderPeople);

const ul = document.createElement('ul');
document.body.appendChild(ul);

renderPeople.forEach(renderContent);

function renderContent(itm){
  const li = document.createElement('li');
  li.textContent = `${itm.name}: age ${itm.age}`;
  if(itm.isDeceased){
    li.textContent += ' (deceased)';
  }
  ul.appendChild(li);
}