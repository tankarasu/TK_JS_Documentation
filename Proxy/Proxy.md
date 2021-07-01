# Proxy

## Proxy Constructor

> Proxy constructor take 2 arguments.

- Proxy object took a reference to the object passed into in.

```js
// declaration
const obj = {};
const proxyObject = new Proxy( obj, handler );

assert( obj !== proxyObject);
// => true
```

- any change to the ProxyObject will affect original object.
  
```js
proxyObject.foo = true;

assert( obj.foo === true );
// => true
```

- any change to the original object will affect ProxyObject.

```js
obj.bar = true;

assert( proxyObject === true );
// => true
```
