export class Queue<T> {
  private _storage: Record<number, T>;
  private _tail: number;
  private _head: number;
  constructor() {
    this._storage = {};
    this._tail = 0;
    this._head = 0;
  }

  enqueue(value: T) {
    this._storage[this._tail] = value;
    this._tail++;
  }

  dequeue(): T | null {
    if (this._head === this._tail) {
      return null;
    }

    const val = this._storage[this._head];
    delete this._storage[this._head];

    this._head++;
    return val;
  }

  peek(): T | null {
    if (this._head === this._tail) {
      return null;
    }

    return this._storage[this._head];
  }
}
