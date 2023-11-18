export class Stack<T> {
  private _storage: Record<number, T>;
  public _len = 0;

  constructor() {
    this._storage = {};
    this._len = 0;
  }

  push(value: T) {
    this._storage[this._len] = value;
    this._len++;
  }

  pop(): T | null {
    if (this._len === 0) {
      return null;
    }

    const val = this._storage[this._len - 1];
    delete this._storage[this._len - 1];
    this._len--;

    return val;
  }

  peek(): T | null {
    if (this._len === 0) {
      return null;
    }

    return this._storage[this._len - 1];
  }
}
