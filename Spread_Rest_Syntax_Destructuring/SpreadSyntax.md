

# Summary
[previous page](Summary.md)

- [Summary](#summary)
  - [Description](#description)
  - [Syntax](#syntax)
  - [Spread syntax in object literals](#spread-syntax-in-object-literals)
    - [Shallow cloning object](#shallow-cloning-object)
    - [Merge object](#merge-object)
  - [Spread syntax and Array](#spread-syntax-and-array)
    - [Passing arguments into function](#passing-arguments-into-function)
    - [Update/Create an array](#updatecreate-an-array)
    - [Concatenate arrays](#concatenate-arrays)
    - [Calling a constructor with an array](#calling-a-constructor-with-an-array)

## Description
[summary](#summary)

- you can expand an iterable in place where 0 or more arguments are expected.
- you can spread an Array expression, a string and more.

## Syntax 
[summary](#summary)
  
```ts
Function(...iterableObject); //function call

[ ...iterableObject, value, value2 ]; // array assignement

let cloneObject = { ...iterableObject } // pass all key-value pair of an Object
```

## Spread syntax in object literals
[summary](#summary)

> the spread syntax inserts all enumerable own properties of it's operand inside an object created with an object literal.  
> 
> it can be used when all element from an object or an array need to be included in a list.  
> 
> You can merge objects and make shallow-cloning (exclude prototype).

### Shallow cloning object

```ts
const obj = { 
  x: 5,
  y: 3
}

let cloneObj = { ...obj };
// cloneObj => Object { x: 5, y: 3 };
```

### Merge object

```js
const me = { name: "Tan", lastName: "KARASU" };

const meWithDetail = { ...me, age: 42 };
const firstAgeDetail = { age: 42, ...me };

// expected output
// => { name: "Tan", lastName: "KARASU", age:42 };
// => {  age: 42, name: "Tan", lastName: "KARASU" };
// insertion order is preserved
```

> you can clone properties on an immutable way and modifie some of them

```js
const myNeighbors = { ...me, lastName: "not provided" }

// expected output
// => { name: 'Tan', lastName: 'not provided' }
// original me object is not mutated
```


## Spread syntax and Array 
[summary](#summary)

### Passing arguments into function

> Assume that we have a function who take 3 parameters and add them together.

```ts
function addAll( a : number, b: number, c: number ){
  return a + b + c;
}

// we can use it like this.

console.log( addAll( 1, 2, 3));
// => 6
```

> we can also spread all element of an Array.
- addAll function need here 3 arguments, and last will be simply ignored. 

```ts
const assert = require("assert");

const numbers = [ 1, 2, 3, 4];

assert.strictEqual( addAll(...numbers), 6 )
// => true

// comparison before & after spread syntax
addAll.apply( null, numbers);
addAll(...numbers);
```

### Update/Create an array
[summary](#summary)

> you can create an new Array or update an existing one.

```ts
const numbers = [ 1, 2 ];

numbers = [...numbers, 3];

// steps:
// we're saying first numbers is an empty array       => [ ]
// then we spread 1 and 2 inside it with "...numbers" => [ 1, 2 ]
// finally we update it with value 3                  => [ 1, 2, 3 ]
```
### Concatenate arrays
[summary](#summary)

```ts
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

// arr1 & arr2 are not mutated

let newArr = [...arr1, ...arr2];
// => [ 0, 1, 2, 3, 4, 5 ];

// also can do this but mutate first array
arr1.push( ...arr2 );
```

### Calling a constructor with an array
[summary](#summary)

```ts
const arr = [ 1970, 0, 1];
let oneDate = new Date( ...arr );

// => 1 Jan 1970
```