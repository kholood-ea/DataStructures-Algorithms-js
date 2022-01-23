class Stack {
  constructor() {
    this.Storage = {};
    this.Count = 0;

    this.Push = function (params) {
      this.Storage[this.Count] = params;
      this.Count++;
    };
    this.Pop = function () {
      if (this.Count == 0) return undefined;

      let lastEle = this.Storage[this.Count - 1];
      delete this.Storage[this.Count - 1];
      this.Count--;
      return lastEle;
    };
    this.Peek = function () {
      return this.Storage[this.Count - 1];
    };
  }
}

var s = new Stack();

s.Push(5);
console.log(s.Peek());
console.log(s.Count);
console.log(s.Pop());
console.log(s.Pop());
