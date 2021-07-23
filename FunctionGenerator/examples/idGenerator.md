[previous](../FunctionGenerator.md)
# id Generator - time Generator

> We will use a generator for configuring id and createAt property of an instance

## Source files

- [class Ninja](../Class/Ninja.js)
- [test of class Ninja](../../test/FunctionGenerator.spec.js)

## Code example
1. first we will create a class `Ninja`
```ts
export class Ninja {
    public name: string;
    public id: number | void;
    public createAt: number | void;

    constructor(name: string) {
        this.name = name;
    }
}
```
2. then we will create a generator for id and createAt property  
> at this point we only handle the name property, Go Ahead and add the rest of the properties

```ts
export class Ninja {
    public name: string;
    public id: number | void;
    public createAt: number | void;

    constructor(name: string) {
        let idIterator: Generator = this.idGen();
        let timeGenerator: Generator = this.timeGen();
        
        this.name = name;
        this.id = idIterator.next().value;
        this.createAt = timeGenerator.next().value;
    }

    * idGen(){
        let id = 0;
        while(true){
            yield ++id;
        }
    }

    * timeGen(){
        while(true){
            yield Date.now();
        }
    }
}
```

> every time you create an Instance of `Ninja` you will get a new id and a new createAt value. The "while(true)" is needed because we want to generate a new id and createAt value every time. It's a feature and not a bug. :)  
> 
> Id variable will be maintened by the generator and the while loop will never break your code.
