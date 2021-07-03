# Reflect.getPrototypeOf

## 1. Description

---

- The static Reflect.getPrototypeOf() method is almost the same method as Object.getPrototypeOf().
- It returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.

---

## 2. Syntax

```ts
Reflect.getPrototypeOf( target );
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

the prototype of given object.  
If there are no inherited properties, null is returned.

```ts
return prototype | null
```

---

---

[go home](../Reflect.md)
