# Reflect.construct

## 1. Description

- The static Reflect.construct() method acts like the new operator, but as a function.
- Reflect.construct() allows you to invoke a constructor with a variable number of arguments.
- This would also be possible by using the spread syntax combined with the new operator.
- It is equivalent to calling new target(...args).
- It gives also the added option to specify a different prototype.

---

## 2. Syntax

```ts
Reflect.construct( target, argumentsList );  
Reflect.construct( target, argumentsList, newTarget );
```

---

## 3. Parameters

### Type definition

```ts
target : function;
argumentList : []; // an Array-like object
newTarget? : constructor; 
```

### Throws

if target and/or newTarget are not constructor

```ts
throw TypeError 
```

### Return value

a new instance of target or newTarget initialized by target as a constructor with given arguments.

```ts
return new target | new newTarget
```

---

---

[go home](../Reflect.md)
