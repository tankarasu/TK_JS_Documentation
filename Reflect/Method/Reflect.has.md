# Reflect.has( )

> this method check if a property exists on an object, like "in operator".

```ts
const person = {
    id: 1,
    name: "Tan"
}

// syntax

Reflect.has(target , propertyKey );

// It use internal method : 
[[ HasProperty ]]

// Code example

Reflect.has( person, "id" ) // own property & inherited
Reflect.has( person, "toString" ) // on prototype chain
// => true
```

> Parameters

```ts
// types of parameters

target : object
propertyKey : string | symbol

throw TypeError // if target is not an object

// return value
return <true | false>
```

---

[go home](../Reflect.md)
