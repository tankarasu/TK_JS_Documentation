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

---

[go home](../Reflect.md)
