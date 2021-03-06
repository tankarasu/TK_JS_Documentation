# Reflect.isExtensible

## 1. Description

---

- The static Reflect.isExtensible() method determines if an object is extensible.
- It is similar to Object.isExtensible(), but with some differences.

---

## 2. Syntax

```ts
Reflect.isExtensible(target)
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

is object extensible?

```ts
return boolean
```

---

## 4. Code example

```ts
let obj = {}
Reflect.isExtensible( obj )  
// => true

Reflect.preventExtensions(obj)
Reflect.isExtensible(obj)  
// => false

let sealedObj = Object.seal({})
Reflect.isExtensible(sealedObj)  
// => false

let frozenObj = Object.freeze({})
Reflect.isExtensible(frozenObj)  
// => false
```

---

[go home](../Reflect.md)
