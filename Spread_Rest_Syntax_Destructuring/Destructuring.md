[previous page](Summary.md)

# Destructuring Assignement syntax

> you can make destructure assignement to a variable, a property of an Object, or an index of an Array.

summary
- [Destructuring Assignement syntax](#destructuring-assignement-syntax)
  - [1. Array Destructuring pattern](#1-array-destructuring-pattern)
    - [Elision when destructuring an Array](#elision-when-destructuring-an-array)
    - [Rest syntax can't found value](#rest-syntax-cant-found-value)
    - [Default value](#default-value)
    - [Swapping variable](#swapping-variable)
    - [For ... of loop support destructuring](#for--of-loop-support-destructuring)
  - [2. Object Destructuring pattern](#2-object-destructuring-pattern)
    - [Rest Syntax in Object destructuring](#rest-syntax-in-object-destructuring)
    - [Nested Destructuring assignement](#nested-destructuring-assignement)
    - [Assigning to new variable name](#assigning-to-new-variable-name)

## 1. Array Destructuring pattern

### Elision when destructuring an Array

```ts
const assert = require("assert");

const [, , x, y ] = [ 1, 2, 3, 4 ];

// first and second value are ignored due to trailling comma
assert.strictEqual( x, 3 );
assert.strictEqual( y, 4 );
```

### Rest syntax can't found value

```ts
const assert = require("assert");

const [ x, y, ...z ] = ['a'];

assert.strictEqual( x, "a" );
assert.strictEqual( y, undefined );
assert.strictEqual( z, [] );

```

### Default value

```ts
let a, b;

[ a, b = 7 ] = [1];

console.log(a); 
// => 1

console.log(b); 
// => 7
```

### Swapping variable

```ts
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]
```

### For ... of loop support destructuring

```ts
const arr = [ "a", "b" ];

for( const [index, element] of arr.entries()){
    console.log(index, element);
}

// 0 a
// 1 b
```

## 2. Object Destructuring pattern

### Rest Syntax in Object destructuring

> inside this pattern, rest syntax copies all enumerable own properties inside operand, except already mentionned in the object literal.  
> it can be used more than one time only if it's nested.  
> It always must appears on the end of the assignement.

```ts
const assert = require("assert");

const obj = {
    foo: 1,
    bar: 2,
    baz: 3
};

const { foo, ...rest } = obj;

assert.strictEqual( foo, 1);        // => true
assert.strictEqual( rest.bar, 2);   // => true
assert.strictEqual( rest.baz, 3);   // => true

// using rest inside function call
function logParam({foo, ...rest}){
    console.log("params": , {foo, ...rest});
}

// Expected output
// => params: { foo: 1, bar: 2, baz: 3 }
 ```

 ### Nested Destructuring assignement
 ```ts
const assert = require("assert");

const obj = {
    foo: { a: 1, b: 2, c: 3 },
    bar: 4,
    baz: 5
}

const {
    foo: {a, ...restOne},
    ...rest
} = obj;

assert.strictEqual( a, 1);                      // => true
assert.strictEqual( restOne, { b: 2, c: 3});    // => true
assert.strictEqual( rest, { bar: 4, baz: 5 })   // => true
 ```

 ### Assigning to new variable name

 ```ts
const o = {p: 42, q: true};
const {p: foo, q: bar} = o;

console.log(foo); 
// => 42
console.log(bar); 
// => true
 ```