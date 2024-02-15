// In JavaScript, an object is a collection of key-value pairs. This data structure is also called map, dictionary or hash-table in other programming languages

//It's UNORDED collection of key-value pairs.
//to retrieve a value: use the dot notaion or bracket notation

//An object is not iterable with a for loop - use Object.entries() or to see the enumerables, use for...in

//To access properties you can use two different syntaxes, either object.property or object["property"]

const obj = {
  a: 45,
  b: 56,
  c: 'plin',
};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(obj.c);
console.log(obj['a']);
delete obj.c;
console.log(obj);

console.log(Object.entries(obj));

for (const enumarables in obj) {
  console.log(enumarables);
}

/**  
-map, filter, reduce, concat, slice and splice

Object Big-O time complexity:
-insert - O(1)
-Remove - O(1)
-Access - O(1)
-Search - O(n)
-Object.keys() - O(n) 
-Object.values() - O(n)
-Object.entries() - O(n)
*/
