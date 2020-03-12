/**
 * Comparing search algorithms in a sorted array execution time.
 * All three linear algorithms have running time O(n) but
 * linear search with the sentinel is the fastest linear algorithm.
 *
 * When the array is in random order, we can use binary search without sorting the array and therefore,
 * for a random sorted array, the fastest search algorithm is the linear search with sentinel.
 *
 * When the array is sorted, binary search is the fastest to search into an array.
 */

let basic = require('./linear/basic');
let better = require('./linear/better-linear');
let sentinel = require('./linear/sentinel-linear');
let binary = require('./binary');

let size = 50000000;
console.time("filling the array")
let array = Array.from(new Array(size)).map((t, i) => i);
// Shuffle the array.
// for(let i = array.length - 1; i > 0; i--){
//   const j = Math.floor(Math.random() * i)
//   const temp = array[i]
//   array[i] = array[j]
//   array[j] = temp
// }
console.timeEnd("filling the array")

let x = Math.floor(Math.random() * size);
console.log("Searching", x, "in an array of", size, "elements");
console.time("Basic Linear search executed in")
console.log(x, "is at position", basic(array, size, x), "in the array");
console.timeEnd("Basic Linear search executed in")

console.time("Better Linear search executed in")
console.log(x, "is at position", better(array, size, x), "in the array");
console.timeEnd("Better Linear search executed in")

console.time("Sentinel Linear search executed in")
console.log(x, "is at position", sentinel(array, size, x), "in the array");
console.timeEnd("Sentinel Linear search executed in")

console.time("Binary search executed in")
console.log(x, "is at position", binary(array,0, size - 1, x), "in the array");
console.timeEnd("Binary search executed in")
