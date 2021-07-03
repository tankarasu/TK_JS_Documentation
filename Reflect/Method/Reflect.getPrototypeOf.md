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

## 4. Code example

```ts
Reflect.getPrototypeOf({})                  
// => Object.prototype

Reflect.getPrototypeOf(Object.prototype)    
// => null

Reflect.getPrototypeOf(Object.create(null)) 
// => null

// if you want prototype of a string

Reflect.getPrototypeOf('foo')  
// => Throws TypeError

// You might need to first coerce string to an Object
Reflect.getPrototypeOf(Object('foo'))  
// => String.prototype
```

---

[go home](../Reflect.md)
