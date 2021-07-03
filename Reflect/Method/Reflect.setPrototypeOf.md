# Reflect.setPrototypeOf

## 1. Description

---

- The static Reflect.setPrototypeOf() method is the same method as Object.setPrototypeOf(), except for its return type.
- It sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or to null.
- it returns true if the operation was successful.
  
---

## 2. Syntax

```ts
Reflect.setPrototypeOf(target, prototype)
```

---

## 3. Parameters

### Type definition

```ts
target : object;
prototype : object | null;
```

### Throws

if target is not an object.  
if prototype is not object or null

```ts
throw TypeError 
```

### Return value

is prototype correctly set?

```ts
return boolean
```

---

## 4. Code example

```ts
let obj = {};
Reflect.setPrototypeOf( obj, Object.prototype ); 
// => true
```

> It can change an object's [[Prototype]] to null.

```ts
Reflect.setPrototypeOf( {}, null );
// => true
```

> Returns false if target is not extensible.

```ts
Reflect.setPrototypeOf( Object.freeze( {} ), null ); 
// => false
```

> Returns false if it cause a prototype chain cycle.

```ts
let target = {};

let proto = Object.create( target );
Reflect.setPrototypeOf( target, proto );
// => false
```

---

[go home](../Reflect.md)
