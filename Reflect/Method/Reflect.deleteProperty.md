# Reflect.deleteProperty

## 1. Description

- The Reflect.deleteProperty method allows you to delete a property on an object.
- It returns a Boolean indicating whether or not the property was successfully deleted.
- It is almost identical to the non-strict delete operator.
- It use target \[ [Delete] ]( propertyKey ) internal method.

---

## 2. Syntax

```ts
Reflect.deleteProperty( target, propertyKey );
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

is property correctly deleted?

```ts
return boolean
```

---

## 4. Code example

> on a classical Object object.

```ts
const me = {
    firstName: "Tan",
    lastName:  "KARASU",
    age: 41
}

Reflect.deleteProperty(me, "age");
// => true, age property was deleted.
```

> we can delete inside an Array

```ts
let arr = [1, 2, 3, 4, 5];
Reflect.deleteProperty( arr, "3" );
// => true, arr is now equal to [1, 2, 3, undefined, 5]
```

> specific use-case

```ts
// Returns true if no such property exists

Reflect.deleteProperty({}, 'foo')  
// => true

// Returns false if a property is not configurable

Reflect.deleteProperty(Object.freeze({foo: 1}), 'foo')  
// => false
```

---

[go home](../Reflect.md)
