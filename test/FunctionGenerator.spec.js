// internal requirement
const Ninja = require( "../FunctionGenerator/Class/Ninja")
let ninja = new Ninja("Hiroshi");

describe("Ninja Class",()=>{
    it("should be an instance of Ninja",()=>{
        expect(ninja instanceof Ninja).toBeTruthy();
        expect(ninja).toBeTruthy();
        expect(ninja).toBeDefined();
    })

    it("should have a some properties",()=>{
        expect(ninja.name).toBeDefined();
        expect(ninja.name).toBe("Hiroshi");
        expect(ninja).toHaveProperty("id")
        expect(ninja).toHaveProperty("createdAt")
        expect(ninja).toHaveProperty('idGen')
        expect(ninja).toHaveProperty('timeGen')
    })

    it("should have an id set to 1",()=>{
        expect(ninja.id).toBe(1);
    })
    it("should have an createdAt property defined",()=>{
        expect(ninja.createdAt).toBeDefined();
    })
})