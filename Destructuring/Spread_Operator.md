# Spread Operator

## Spread Operator in object literals

> the spread operator inserts all enumerable own properties of it's operand inside an object created with an object literal.

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
