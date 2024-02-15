/**
 * Hash Table
 *
 * - A Hash teble, also known as hash map is data structure that is used to store a key-value pairs
 * - Give, a key, it's possible associate a value with that key for every fast lookup
 *
 * - Javascript's Object is a special implementation of the hash table data structure. However, Object class adds its own keys. Keys that you input may conflict and overwrite the inherited default properties
 *
 * - Maps in JS allow you to store key-value pairs
 *
 * - Although JS has its own two has implementations (Map and objects), write you own hash table implementation is a very popular JS interview question.
 *
 *
 * ----IMPLEMENTATION----
 *
 * - Typically, we store the key value pairs in a fix sized array
 * - Arrays have a numeric index
 * - A hashing function accepts the strikg key, converts it into a hash code using defined logic and then maps it into a numeric index that is within the bounds of the array
 * - Using the index, store the value
 * - The same hashing function is reused to retriev the value given a key.
 *
 * USAGE: Database Indexing and cache.
 *
 * PARA NAO REINVENTAR A RODA E EM VEZ DE IMPLEMENTAR DO ZERO, SE ACONSELHA USAR A IMPLEMENTACAO QUE AS LINGUAGENS JA POSSUEM DESTA ESTRUTURA
 */

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }

  remove(key) {
    let index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(10);
table.set('name', 'Bruce');
table.set('age', 25);
table.display();
console.log(table.get('name'));
table.set('name', 'Clark');
table.set('name', 'Diana');
console.log(table.get('name'));
table.remove('name');
table.display();
