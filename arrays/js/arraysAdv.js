'use strict';

const reviews = [
  {comment: 'Thin and easy to hang on wall', stars: 4},
  {comment: 'All the colors were excellent', stars: 5},
  {comment: 'Color was a little wonky in the bright daylight', stars: 3},
  {comment: 'Lousy color', stars: 1},
  {comment: 'Remote has too many buttons', stars: 3},
];

// callback methods
// find() - returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
// includes() - determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// filter() - creates a new array with all elements that pass the test implemented by the provided function.
// forEach() - executes a provided function once for each array element.
// map() - creates a new array with the results of calling a provided function on every element in the calling array.
// some() - tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
// every() - tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// const tvReview = reviews.find(itm => itm.comment.includes('color'));
// console.log(tvReview);

function findFeature(feature){
  return function(itm){
    let featureLowered = feature.toLowerCase();
    const commentLowered = itm.comment.toLowerCase();
    return commentLowered.includes(featureLowered);
  }
};

let tvRating = reviews.filter(findFeature('color'));
// console.table(tvRating);
// tvRating = reviews.find(findFeature('Remote'));
// console.log(tvRating);
// tvRating = reviews.find(findFeature('bright'));
// console.log(tvRating);

// const goodTVs = reviews.filter(function(arrayMember){
//   return arrayMember.stars > 3;
// });
function findMinRating(rating){
  return function(arrayMember){
    return arrayMember.stars >= rating;
  }
}
// const average = reviews.filter(findMinRating(3));
// console.group('Average TVs');
// console.table(average);
// console.groupEnd();

// const good = reviews.filter(findMinRating(4));
// console.group('Good TVs');
// console.table(good);
// console.groupEnd();

// const best = reviews.filter(findMinRating(5));
// console.group('Best TVs');
// console.table(best);
// console.groupEnd();

// console.table(reviews);

// const badTVs = reviews.filter(function(fullReview, idx){
//   if(fullReview.stars === 1){
//     reviews.splice(idx, 1);
//   }
// });

// console.table(reviews);

// Object.values() - returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop
const anyGreatTVs = Object.values(reviews).some(function(rating){
  return rating.stars <= 1;
});

const anyGreatTVs2 = reviews.some(function(rating){
  return rating.stars <= 1;
});
console.log(anyGreatTVs);
console.log(anyGreatTVs2);

