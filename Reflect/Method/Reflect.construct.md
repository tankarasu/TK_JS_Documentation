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

## 4. Code example

> an addition example:

```ts
const assert = require("assert");

function addition(a, b, c) {
    this.sum = a + b + c;
}

const args = [1, 2, 3];

// 2 ways of doing the same thing
const obj1 = new addition(...args);
const obj2 = Reflect.construct(addition, args);

// expected result
assert.strictEqual( obj1.sum, obj2.sum );
```

> What about if we create a greeting class ?

```ts
// a simple class who greet by your name.
class Greeting {
    constructor(name){
        this.name = name;
    }

    greet() {
        return `Hello ${this.name}!`;
    }
}
```

> we want to make a factory with this class.  
> in ES5 it will be like this:

```ts
function greetingFactory( name ){

    // we pass the prototype of greeting into instance
    var instance = Object.create( Greeting.prototype );
    Greeting.call( instance, name);

    return instance
}
```

> in ES6:

```ts
const greetingFactory = ( name) => Reflect.construct(Greeting, [name]);
```

---

[go home](../Reflect.md)
