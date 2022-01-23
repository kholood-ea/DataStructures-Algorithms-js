function Queue() {
  this.Collection = [1, 2, 3];

  this.Enqueue = function (item) {
    this.Collection.push(item);
  };
  this.Dequeue = function () {
    var frstEle = this.Collection.shift();
    return frstEle;
  };
  this.Front = function () {
    return this.Collection[0];
  };
  this.Print = function () {
    console.log(this.Collection);
  };
  this.IsEmpty = function () {
    return this.Collection.length === 0;
  };
  this.Size = function () {
    return this.Collection.length;
  };
}

var k = new Queue();
console.log(k.IsEmpty());
k.Print();
k.Enqueue("I LOVE DATASTRUCTURES");
k.Print();
console.log(k.Front());
console.log(k.Dequeue());
k.Print();
