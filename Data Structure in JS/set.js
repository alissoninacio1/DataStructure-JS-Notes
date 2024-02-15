/**
Set - can contain a mix of data types, are dynamically sized.
they're are iterables (you can use a for loop)
it holds only UNIQUE VALUES

difference to an array
-array allows duplicate values 
-array keeps the insertion order, a set, no.
-searching and deleting is faster in set compared to arrays

*/

const set = new Set([1, 2, 3]);

set.add(4);
set.add(4); //if you try to add an existing value, set will ignore it

console.log(set.has(4));
set.add(5);
set.delete(3);

console.log(set.size);

for (const item of set) {
  console.log(item);
}

set.clear(); //clear all set values
console.log(set);
