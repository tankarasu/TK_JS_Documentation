# Reflect.apply

## 1. Description

- The static Reflect.apply() method calls a target function with arguments as specified.
- it's less verbose and easier to understand

---

## 2. Syntax

```ts
Reflect.apply( target, thisArgument, argumentsList );
```

---

## 3. Parameters

### Type definition

```ts
target : function;
thisArgument : any;
argumentList : [] ; // array-like object
```

### Throws

if target is not callable

```ts
throw TypeError 
```

### Return value

It return the value returned by the target-function depends "this" and arguments

```ts
return <any>
```

---

## 4. Code example

> Think about a function who remove vowels on a string, or inside an array of string, and return a string without vowel.

```ts
export function removeVowel(input : Array<string>): string {

    let value : Array<string>;
    result.forEach(element => {
      if(!/[aeiou]/.test(element))value.push(element)
    });

    return value.join("");
}
```

> we can have this function on top-level of our module , or in another module and import it.

```ts
import removeVowel from "/somewhere/function.ts";

let arrStr = ["t", "h", "i", "s"];

console.log(Reflect.apply( removeVowel, undefined, arrStr))
// => ths
```

---

[go home](../Reflect.md)
