# Reflect.set

## 1. Description

- The Reflect.set method allows you to set a property on an object.  
- It does property assignment and is like the property accessor syntax as a function.
  
---

## 2. Syntax

```ts
Reflect.set(target , propertyKey, value );
Reflect.set(target , propertyKey, value, receiver );
```

---

## 3. Parameters

### Type definition

```ts
target : object;
propertyKey : string | symbol;
value : any;
receiver? : object; // value of "this"
```

### Throws

if target is not an object

```ts
throw TypeError 
```

### Return value

is property correctly set?

```ts
return boolean
```

---

## 4. Code

```ts
const person = {
    id: 1,
    name: "Tan"
}


// receiver = value of "this"
```

---

## Parameters

```ts
// types of parameters

target : object
propertyKey : string | symbol
value : any
receiver : object

throw TypeError // if target is not an object

// return value
return <true | false>
```

---

## Code example

```ts
let arr =[ 1, 2, 3];

Reflect.set(person, "age", 41 );
// => return true , property with value is set

// similarly to : 
person[ "age" ] = 41;

console.log( person.age );
// => 41

Reflect.set( arr, 2, "three" );
// => return true , property with value is set

// similarly to :
arr[2] = "three";

console.log( arr[2] );
// => three

// truncate an Array from beginning
Reflect.set(arr, "length", 1);
// arr = [1]

```

---

[go home](../Reflect.md)
