var KholoodSet = function () {
  this.Collection = [];

  this.Has = function (item) {
    return this.Collection.indexOf(item) !== -1;
  };
  this.Values = function () {
    return this.Collection;
  };
  this.AddOne = function (item) {
    if (!this.Has(item)) {
      this.Collection.push(item);
      return true;
    }
    return false;
  };
  this.AddMultiple = function (items) {
    items.forEach((itm) => {
      if (!this.Has(itm)) {
        this.Collection.push(itm);
      }
    });
  };
  this.Remove = function (item) {
    if (this.Has(item)) {
      let index = this.Collection.indexOf(item);
      this.Collection.splice(index, 1);
      return true;
    }
    return false;
  };
  this.Union = function (set) {
    let UnionSet = new KholoodSet();
    let firstSet = this.Values();
    firstSet.forEach((element) => {
      UnionSet.AddOne(element);
    });
    set.Values().forEach((element) => {
      UnionSet.AddOne(element);
    });
    return UnionSet.Values();
  };
  this.Intersection = function (set) {
    let IntersectionSet = new KholoodSet();
    let firstSet = this.Values();
    firstSet.forEach((elem) => {
      if (set.Has(elem)) {
        IntersectionSet.AddOne(elem);
      }
    });
    return IntersectionSet.Values();
  };
  this.Difference = function (set) {
    let DiffSet = new KholoodSet();
    let firstSet = this.Values();
    firstSet.forEach((elem) => {
      if (!set.Has(elem)) {
        DiffSet.AddOne(elem);
      }
    });
    set.Values().forEach((elem) => {
      if (!firstSet.includes(elem)) {
        DiffSet.AddOne(elem);
      }
    });
    return DiffSet.Values();
  };
  this.Subset = function (set) {
    return this.Values().every((elem) => set.Has(elem));
  };
};
Object.defineProperty(KholoodSet.prototype, "Size", {
  get: function () {
    return this.Collection.length;
  },
});

let k = new KholoodSet();
k.AddMultiple([5, 3, 2, 1]);

let h = new KholoodSet();
h.AddMultiple([2, 1]);
// console.log(k.Difference(h));
console.log(h.Subset(k));

// console.log(k.Intersection(h));
// // console.log(k.Has(1));
// // console.log(k.Values());
// k.AddMultiple([3, 4, 5, 6]);
// console.log(k.Values());
// console.log(k.Union(h));
// // console.log(k.Remove(1));
// console.log(k.Values());
// // console.log(k.Add(2));
// // console.log(k.Values());
