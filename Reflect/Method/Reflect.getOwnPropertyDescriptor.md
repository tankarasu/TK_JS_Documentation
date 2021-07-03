# Reflect.getOwnPropertyDescriptor

## 1. Description

---

- The static Reflect.getOwnPropertyDescriptor() method is similar to Object.getOwnPropertyDescriptor().
- The Reflect.getOwnPropertyDescriptor method returns a property descriptor of the given property if it exists in the target object, undefined otherwise.
- The only difference to Object.getOwnPropertyDescriptor() is how non-object targets are handled.

---

## 2.Syntax

```ts
Reflect.getOwnPropertyDescriptor( target, propertyKey );
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

if the property exist on the object, it return a property descriptor object.  
if not undefined.

```ts
return object | undefined
```

---

## 4. Code example

```ts

 let obj = { 
     x: "hello"
 }
```

> on existing property

```ts
Reflect.getOwnPropertyDescriptor( obj, 'x' );
// => {
    // value: "hello", 
    // writable: true, 
    // enumerable: true, 
    // configurable: true
    // }
```

> on non-existing property

```ts
Reflect.getOwnPropertyDescriptor( obj, 'y' );
// => undefined
```

> on Array-like object property

```ts
Reflect.getOwnPropertyDescriptor( [], 'length' );
// {value: 0, writable: true, enumerable: false, configurable: false}
```

---

[go home](../Reflect.md)
