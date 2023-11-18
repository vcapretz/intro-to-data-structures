export class HashTable<T> {
  private _storage: [string, T][][];

  constructor() {
    this._storage = [];
  }

  insert(key: string, value: T) {
    const index = this._hash(key);

    if (!this._storage[index]) {
      this._storage[index] = [];
    }

    const existing = this._storage[index].find(([k]) => k === key);
    if (existing) {
      existing[1] = value;
    } else {
      this._storage[index].push([key, value]);
    }
  }

  remove() {}

  retrieve(key: string): T | null {
    const index = this._hash(key);
    if (!this._storage[index]) {
      return null;
    }

    return this._storage[index].find(([k]) => k === key)?.[1] ?? null;
  }

  private _hash(str: string, n: number = 25) {
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i) * 3;
    }

    return sum % n;
  }
}
