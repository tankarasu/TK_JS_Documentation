# Reflect.get

## 1. Description

- The Reflect.get method allows you to get a property on an object.  
- It is like the property accessor syntax as a function.

---

```ts
const arr = [ 1, 2 ];
// syntax

Reflect.get(target , propertyKey );
Reflect.get(target , propertyKey, receiver? );

// code example

Reflect.get( person, "name" ); 
// similarly => person["name"]
// => Tan

Reflect.get( arr, 1 ); 
// similarly => arr[1]
// => 2
```

## Parameters

```ts
// types of parameters

target : object
propertyKey : string | symbol
receiver? : object 

throw TypeError // if target is not an object

// return value
return <any>
```

---

[go home](../Reflect.md)
