# Reflect.deleteProperty

## 1. Description

- The Reflect.deleteProperty method allows you to delete a property on an object.
- It returns a Boolean indicating whether or not the property was successfully deleted.
- It is almost identical to the non-strict delete operator.

---

## 2. Syntax

```ts
Reflect.deleteProperty( target, propertyKey );
```

---

## 3. Parameters

### Type definition

```ts
target : object;
propertyKey : string | symbol;
```

### Throws

if target is not an object

```ts
throw TypeError 
```

### Return value

is property correctly deleted?

```ts
return boolean
```

---

---

[go home](../Reflect.md)
