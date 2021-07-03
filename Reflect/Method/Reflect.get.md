# Reflect.get

## 1. Description

- The Reflect.get method allows you to get a property on an object.  
- It is like the property accessor syntax as a function.

---

## 2. Syntax

```ts
Reflect.get( target , propertyKey );
Reflect.get( target , propertyKey, receiver? );
```

---

## 3. Parameters

### Type definition

```ts
target : object;
propertyKey : string | symbol;
receiver? : object;
```

### Throws

if target is not an object

```ts
throw TypeError 
```

### Return value

```ts
return <any>
```

---

```ts
const arr = [ 1, 2 ];

// code example

Reflect.get( person, "name" ); 
// similarly => person["name"]
// => Tan

Reflect.get( arr, 1 ); 
// similarly => arr[1]
// => 2
```

---

[go home](../Reflect.md)
