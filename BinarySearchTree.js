class Node {
  constructor(Data, Left = null, Right = null) {
    this.Data = Data;
    this.Left = Left;
    this.Right = Right;
  }
}

class BST {
  constructor() {
    this.Root = null;
  }

  Add(data) {
    const node = this.Root;
    if (node === null) {
      this.Root = new Node(data);
      return;
    } else {
      SearchTree(node, data);
    }
    return SearchTree(node, data);
  }
}

function SearchTree(node, data) {
  if (data < node.Data) {
    if (node.Left === null) {
      node.Left = new Node(data);
      return;
    } else if (node.Left !== null) {
      return SearchTree(node.Left, data);
    }
  }
  if (data > node.Data) {
    if (node.Right === null) {
      node.Right = new Node(data);
    } else if (node.Right !== null) {
      return SearchTree(node.Right, data);
    }
  } else return null;
}

var bst = new BST();
bst.Add(88);
bst.Add(77);
bst.Add(78);
bst.Add(98);

console.log(bst);
console.log(bst.Root);
