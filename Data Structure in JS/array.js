//ARRAY
// it's also called lists in another prog languages
//in JS it can contain a mix of different data types. They are resizable.
const arr = [1, 2, 3, 'vyserys'];
arr.push(4); //coloca ao final
arr.unshift(0); //coloca ao inicio
arr.pop(); //remove o elemento final
arr.shift(); //remove o elemento inicial

for (const item of arr) {
  console.log(item);
}

/**  
-map, filter, reduce, concat, slice and splice

Array Big-O time complexity:
- vinsert/remove from end - O(1), constant
- insert/remove from beginning - O(n), linear 
- Access - O(1), constant
- Search - O(n) - linear time complexity
- Push/pop - O(1) - constant time complexity
- Shift/unshift/concat/slice/splice - O(n), linear 
- forEach/map/filter/reduce - O(n), linear 
*/
