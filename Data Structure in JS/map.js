/**
 Map

 * A map is an ordered collection of key-value pairs. Both keys and values can be of any type
 * to retrieve a value you can use the corresponding key
 * Maps are iterables - they can be used with a for loop
 * 
 * 
 Object vs Map
- objects are unordered whereas maps are ordered
- Keys in objects can only be string or symbol type whereas in maps, they can be of any type.
- objects are iterables, whereas maps are iterables
 */

//const map = new Map([]), insert each key-value inside brackets

const map = new Map([
  //or const map = new Map()  and populate the map
  ['a', 1],
  ['b', 2],
]);

//ad a new value
map.set('c', 3);
console.log(map.has('a'));
map.delete('b');
console.log(map.size);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

map.clear();
console.log(map);
