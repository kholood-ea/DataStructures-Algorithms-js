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

  FindMin() {
    let node = this.Root;
    while (node.Left !== null) {
      node = node.Left;
    }
    return node;
  }
  FindMax() {
    let node = this.Root;
    while (node.Right !== null) {
      node = node.Right;
    }
    return node;
  }

  Find(data) {
    let current = this.Root;
    while (current.Data !== data) {
      if (data < current.Data) {
        current = current.Left;
      } else current = current.Right;
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  IsPresent(data) {
    let current = this.Root;
    while (current) {
      if (current.Data === data) {
        return true;
      }
      if (data < current.Data) {
        current = current.Left;
      } else current = current.Right;
    }
    return false;
  }
  Remove(data) {
    this.Root = RemoveNode(this.Root, data);
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
function RemoveNode(node, data) {
  if (node == null) {
    return null;
  }
  if (data == node.Data) {
    if (node.Left == null && node.Right == null) {
      return null;
    }
    if (node.Left == null) {
      return node.Right;
    }
    if (node.Right == null) {
      return node.Left;
    }
    let tempNode = node.Right;
    while (tempNode.Left !== null) {
      tempNode = tempNode.Left;
    }
    node.Data = tempNode.Data;
    node.Right = RemoveNode(node.Right, tempNode.Data);
    return node;
  }
  if (data < node.Data) {
    node.Left = RemoveNode(node.Left, data);
    return node;
  }
  if (data > node.Data) {
    node.Right = RemoveNode(node.Right, data);
    return node;
  }
}

var bst = new BST();
bst.Add(88);
bst.Add(77);
bst.Add(76);
bst.Add(78);
bst.Add(98);

console.log(bst.Root);
// console.log(bst.FindMax());
// console.log(bst.FindMin());
// console.log(bst.Find(90));
// console.log(bst.Find(77));
console.log(bst.IsPresent(77));
console.log(bst.Remove(77));
console.log(bst.IsPresent(77));

console.log(bst.Root);
// console.log(bst.IsPresent(77));
