# Set

## Description

> - This Object let you store unique value of any type.
> - It's a collection of uniq value set in insertion order

## 1. Constructor

> You can instantiate a Set

```js
// syntax
new Set(); // empty Set
new Set(iterable);


const numArray = [1, 2, 3, 4];

const mySet = new Set(numArray);
// Set(4) { 1, 2, 3, 4 }
```

## 2. Property

### Set.prototype.size

> Returns the number of elements inside the set.

```js
const mySet = new Set([1, 2, 3, 4]);

// you can log this:
mySet.size; 
// => 4
```

## 3. Methods

### Set.prototype.add( )

> you append a new element at the end of the Set object

```js
// syntax
add(value);


const mySet = new Set();

// you can chain multiple add
mySet.add(35)
     .add(43)
     .add(42);
// Set [35, 43, 42]
```

### Set.prototype.has( )

> this method returns a boolean which indicate if value exist inside the Set

```js
// syntax
has(value);


const mySet = new Set();

mySet.add(35)
     .add(43)
     .add(42);
// Set [35, 43, 42]

mySet.has(35);
// => true
mySet.has("something");
// => false
```

### Set.prototype.clear( )

> Remove all elements inside the Set object.

```js
const mySet = new Set();

mySet.add(35)
     .add(43)
     .add(42);
// Set [35, 43, 42]

mySet.clear();

mySet.has(35)
// => false
mySet.size
// => 0
```

### Set.prototype.delete( )

> remove an element by the key and returns a boolean to trigger result of removal.

```js
// syntax
delete(key);

const mySet = new Set();

mySet.add(35)
     .add(43)
     .add(42);
// Set [35, 43, 42]

mySet.delete(43);
// => true
mySet.delete("test");
// => false

mySet.has(43);
// => false
```
