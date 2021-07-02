# Reflect.ownKeys

## 1. Description

- The static **Reflect.ownKeys()** method returns an array of the target object's own property keys.  
- It implements internal method:  **[[ownPropertyKeys]]**

---

```ts
const ageSym = Symbol.for('age')

const person = {
    id: 1,
    name: "Tan",
    [ageSym]: 41
}

const arr = [];

// syntax

Reflect.has(target);
```

## Parameters

```ts
// types of parameters

target : object

throw TypeError // if target is not an object

// return value
return Array<key>
```

## Code example

### comparison with Object wrapper

> if we don't use Reflect and we must have all properties (includes Symbol properties), we must do that following.

```ts
// if we use Object wrapper
const objArr = Object.getOwnPropertyNames(target);
const symArr = Object.getOwnPropertySymbols(target);

const keyObject = objArr.concat(symArr);

// using the Reflect Object for comparison
const keyReflect = Reflect.ownKeys(target);
```

### Using in our example

```ts
Reflect.ownKeys(person)
// => [ "id", "name", "Symbol('age')" ]

Reflect.ownKeys(arr)
// => [ "length" ]
```

---

[go home](../Reflect.md)
