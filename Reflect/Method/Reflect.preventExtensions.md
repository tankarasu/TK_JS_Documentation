# Reflect.preventExtensions

## 1. Description

---

- The static Reflect.preventExtensions() method prevents new properties from ever being added to an object.
- It is similar to Object.preventExtensions(), but with some differences.

---

## 2.Syntax

```ts
Reflect.preventExtensions(target)
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

is object successfully set to prevent extensions?

```ts
return boolean
```

---

---

[go home](../Reflect.md)
