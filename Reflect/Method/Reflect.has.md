# Reflect.has

## 1. Description

- this method check if a property exists on an object.
- it work like "in operator".

---

## 2. Syntax

```ts
    Reflect.has(target , propertyKey );
```

---

## 3. Parameters

### Type definition

```ts
target : object;
propertyKey : string | symbol;
```

### Throws

if target is not an object

```ts
throw TypeError 
```

### Return value

is property exist on object?

```ts
return boolean
```

---

## 4. Code example

```ts
const person = {
    id: 1,
    name: "Tan"
}
```

> It use internal method :

```ts
[[ HasProperty ]]
```

```ts

Reflect.has( person, "id" ) // own property & inherited
Reflect.has( person, "toString" ) // on prototype chain
// => true
```

---

[go home](../Reflect.md)
