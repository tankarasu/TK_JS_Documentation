# Map

## 1. Description
> - it's a key value pair hold in an object. Original insertion order is preserved. Each iteration on a Map return an Array of [<span style="color:cyan">key,value</span>].  
> - <span style="color:cyan">Map is better</span> in scenarios where there's frequent addition/removal of keys/values pairs.
> - it contains nothing when created, no prototype, similarly to <span style="color:cyan">Object.create(null)</span>
> - key can be of any value (string, object, function, NaN)
> - keys are ordered in the order of entry insertion
> - <span style="color:cyan">it's an iterable who can be directly iterated</span>

---
## 2. Methods

### <span style="color:orange"> Map (  ) constructor </span>

> You may use this constructor to create a new Map object. 
```js
// empty Map, size = 0;
let newMapObject = new Map(); 

// with an iterable object with elements are key/value pairs
const iterable = [
    [1, "one"], [2, "two"], [3, "three"]
    ];

let myMap = new Map(iterable);
// size = 3;
```
---
### <span style="color:orange"> Map.prototype.set </span>
> used for adding or updating an element inside a Map Object
```js
// syntax
set(key,value)

const myMap =  new Map();
map1
    .set(1, "one")  // key 1 is set with value "one"
    .set(1, "foo")  // key 1 is updated with value "foo"
    .set(2, "two"); // key 2 is set with value "two"
```
---
### <span style="color:orange"> Map.prototype.get </span>
> - this method return a specified element from a Map object.  
> - if the value is an object, the key hold a reférence to the Object. 
> - if the key not exist, undefined is returned.

```js 
const myMap =  new Map();

map1
    .set(1, "one")  
    .set(2, "two"); 

// getting the value
console.log(map1.get(1))   // output = "one"
```
---
### <span style="color:orange"> Map.prototype.size</span>
> returning the number of elements in a Map Object
```js
// instantiating a new Map object with constructor
const numMap = new Map();

// filling & settings elements inside a Map Object
numMap
    .set(0, "zero")
    .set(1, "un");

// output = 2
console.log("size", numMap.size);
```
---
### <span style="color:orange">Map.prototype.clear( )</span>
> clear all element inside the Map object

```js
numMap
    .set(0, "zero")
    .set(1, "un");

numMap.clear();

// output = 0
console.log("size", numMap.size);
```
---
### <span style="color:orange">Map.prototype.delete( )</span>
> remove an element inside a Map object by the key

```js
numMap
    .set(0, "zero")
    .set(1, "un");

numMap.delete(1);

// output
console.log("size", numMap.size); // 1
console.log(numMap.get(1)); // undefined
```
---
### <span style="color:orange">Map.prototype.has()</span>
> this method return a boolean indicating if an element with specific key exist on a Map object. 
```js
numMap
    .set(0, "zero")
    .set(1, "un");

// expect true
numMap.has(1);

// expect false
numMap.has("zz");
```
---
## 3. Iterating a Map Object
> there's several ways to iterate a Map Object.

```js
let contact = new Map();
contact
    .set(1, "Tan")
    .set(2, "Jane")
    .set(3, "John");
```
> <span style="color:yellow">for ... of loop</span>
```js
for (let [key, value] of contact)
    console.log(`${key}: ${value}`);

// output
    // 1: Tan
    // 2: Jane
    // 3: John
```
> <span style="color:yellow">for ... of + . keys()</span>
```js
for (let key of contact.keys())
    console.log(`${key}`);

// output
    // 1
    // 2 
    // 3
```
> <span style="color:yellow">for ... of + .values()</span>
```js
for (let key of contact.values())
    console.log(`${key}`);

// output
    // Tan
    // Jane 
    // John
```
> <span style="color:yellow">for ... of loop + .entries()</span>
```js
for (let [key, value] of contact.entries())
    console.log(`${key}: ${value}`);

// output
    // 1: Tan
    // 2: Jane
    // 3: John
```
---
### <span style="color:orange">Map.prototype.forEach( )</span>
> you can execute a callback function on each (key / value) pair of the Map Object.

```js
const iterable = [
    [1, "one"], [2, "two"]
]

function log(key,value) {
    console.log(`key: ${key} - value: ${value}`)
}

let myMap = new Map(iterable);

myMap.forEach(log)
```
---
## 4. Iterator
### <span style="color:orange">Map.prototype.entries( )</span>
> - it return a new iterator object that contains the [key, value] pair  
> for each element in the Map object.  
> - This iterator object is an <span style="color:red">iterable</span>
> -  <span style="color:red">cf</span> : function generator for more details.

```js
let contact = new Map();
contact
.set(1, "Tan")
.set(2, "Jane")
.set(3, "John")

// also works
const iterator  = contact[Symbol.iterator]()
const iterator2 = contact.entries()

// output

console.log(iterator.next().value)
console.log(iterator2.next().value)
// [ 1, 'Tan' ]

console.log(iterator.next().value)
console.log(iterator2.next().value)
// [ 2, 'Jane' ]
```
### <span style="color:orange">Map.prototype.keys( )</span>
> this method return a nex iterator object that contains the keys of each element in the Map object. 
> - This iterator object is an <span style="color:red">iterable</span>
> -  <span style="color:red">cf</span> : function generator for more details.

```js
let contact = new Map();
contact
.set(1, "Tan")
.set(2, "Jane")
.set(3, "John")

const iterator = contact.keys()

// output

console.log(iterator.next().value)
// 1
console.log(iterator.next().value)
// 2
```

### <sp style="color:orange">Map.prototype.values( )</sp>
> this method return a nex iterator object that contains the values of each element in the Map object. 
> - This iterator object is an <span style="color:red">iterable</span>
> -  <span style="color:red">cf</span> : function generator for more details.

```js
let contact = new Map();
contact
.set(1, "Tan")
.set(2, "Jane")
.set(3, "John")

const iterator = contact.values()

// output

console.log(iterator.next().value)
// Tan
console.log(iterator.next().value)
// Jane
```

