// conversion Array <=> Set

// 1. We have an array and we want to make a Set with it.

const numArray = [ 1, 2, 3, 4 ];
const mySet = new Set(numArray);

console.log(mySet);
// Set(4) { 1, 2, 3, 4 };

// 2. Then with a Set we want to make an Array.

const newArray = [0, ...mySet, 5]; // using spread operator
// or only [...mySet] for [ 1, 2, 3, 4 ]
 
console.log(newArray);
// => [0, 1, 2, 3, 4, 5]