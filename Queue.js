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

function PriorityQueue() {
  this.Collection = [];

  this.Enqueue = function (item) {
    if (this.IsEmpty()) {
      this.Collection.push(item);
    } else {
      var added = false;
      for (let i = 0; i < this.Collection.length; i++) {
        if (item[1] > this.Collection[i][1]) {
          this.Collection.splice(i, 0, item);
          added = true;
          break;
        }
      }

      if (!added) {
        this.Collection.push(item);
      }
    }
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
let h = new PriorityQueue();
h.Enqueue(["2nd Ele", 2]);
h.Enqueue(["1st Ele", 3]);
h.Enqueue(["3rd Ele", 1]);
h.Print();
console.log(h.Dequeue());
h.Print();
