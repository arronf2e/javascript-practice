class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insert(data) {
    let node = new Node('zhanghao')
    node.next = this.head
    this.head = node
    return this.head
  }

  append(data) {
    let node = new Node('arron')
    if(!this.head) {
      this.head = node
      return this.head
    }
    let tail = this.head
    while(tail.next !== null) {
      tail = tail.next
    }
    tail.next = node
    return this.head
  }
}

let list = new LinkedList()

console.log(list)