# Reflect.defineProperty

## 1. Description

- The static Reflect.defineProperty() method is like Object.defineProperty() but returns a Boolean.
- The Reflect.defineProperty method allows precise addition to or modification of a property on an object.
- Object.defineProperty return an object.

---

## 2. Syntax

```ts
Reflect.defineProperty( target, propertyKey, attributes );
```

---

## 3. Parameters

### Type definition

```ts
target : object;
propertyKey : string | symbol;
attributes : object;
```

### Throws

if target is not an object

```ts
throw TypeError 
```

### Return value

is the property correctly set ?

```ts
return boolean
```

---

## 4. Code example

> I can make an object representing myself.

```ts
const me = {
    firstName : "Tan",
    lastName : "KARASU"
}

// i can set my id if i enter a new company
Reflect.defineProperty( me, "id", { value: 1 } );

// or, depends how property is set, we can check if operation is success

if( Reflect.defineProperty( me, "id", { value: 1})) {
    // some stuff
}
```

---

[go home](../Reflect.md)
