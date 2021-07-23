class Ninja {
  name;
  id;
  createdAt;

  constructor(name) {
    let idIterator = this.idGen();
    let timeIterator = this.timeGen();
    
    this.name = name;
    this.id = idIterator.next().value;
    this.createdAt = timeIterator.next().value;
  }

 * idGen() {
     let id = 0;
     while (true) {
       yield ++id;
     }
 }
 * timeGen() {
     while(true) {
       yield  Date.now();
     }
 }
}

module.exports = Ninja;
