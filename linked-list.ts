class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList<T> {
  private _head: Node<T> | null;
  private _tail: Node<T> | null;

  constructor() {
    this._head = null;
    this._tail = null;
  }

  insert(value: T) {
    const newValue = new Node<T>(value);

    if (!this._head) {
      this._head = newValue;
    }

    if (!this._tail) {
      this._tail = this._head;
    }

    this._tail.next = newValue;
    this._tail = newValue;
  }

  remove() {}

  removeTail() {
    if (this._head === this._tail) {
      this._head = null;
      this._tail = null;
      return;
    }

    let curr: Node<T> | null = this._head;

    while (curr?.next !== this._tail) {
      curr = curr?.next ?? null;
    }

    curr.next = null;
    this._tail = curr;
  }

  contains(value: T): boolean {
    if (!this._head) {
      return false;
    }

    let curr: Node<T> | null = this._head;

    do {
      if (curr.value === value) {
        return true;
      }

      curr = curr.next;
    } while (curr);

    return false;
  }

  isHead(node: Node<T>): boolean {
    return this._head === node;
  }

  isTail(node: Node<T>): boolean {
    return this._tail === node;
  }
}
