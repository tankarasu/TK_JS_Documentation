# Reflect.ownKeys

## 1. Description

- The static **Reflect.ownKeys()** method returns an array of the target object's own property keys.  
- It implements internal method:  **[[ownPropertyKeys]]**

---

## 2. Syntax

```ts
Reflect.has(target);
```

---

## 3. Parameters

### Type definition

```ts
target : object;
```

### Throws

if target is not an object

```ts
throw TypeError 
```

### Return value

```ts
return Array<string>
```

---

## 4. Code example

```ts
const ageSym = Symbol.for('age')

const person = {
    id: 1,
    name: "Tan",
    [ageSym]: 41
}

const arr = [];

```

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
