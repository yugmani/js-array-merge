// Import stylesheets
import './style.css';

// *********************************************
// How to Efficiently Merge Arrays in JavaScript
// *********************************************

//Create arrays
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = ['g', 'h'];

// Merging Arrays with the Concat Method
// *************************************

//concatenate array1 and array2
const concate12 = array1.concat(array2);
console.log(concate12); //["a", "b", "c", "d", "e", "f"]

//concatenate array1, array2 and array3
const concate123 = array1.concat(array2.concat(array3));
console.log(concate123); //["a", "b", "c", "d", "e", "f", "g", "h"]

// Mergin Arrays with Array.push() method
// ***************************************

// array1.push(array2);
// console.log(array1); //['a', 'b', 'c',  ['d', 'e', 'f']];
// Not getting a desired result???

//loop through the array2 and push each of them into array1
for (let i = 0; i < array2.length; i++) {
  array1.push(array2[i]);
}
console.log(array1); //["a", "b", "c", "d", "e", "f"]
//array1 is mutated

//using Array.map() method
// array2.map(item=> array3.push(item));
// console.log(array3);  //["g", "h", "d", "e", "f"]

//using Array.forEach() method
// array2.forEach((item) => array3.push(item));
// console.log(array3); //["g", "h", "d", "e", "f"]

//Mergin Arrays with 'Spread Operator'
// ***********************************

// const spread1 = [array2, array3]
// console.log(spread1); //[Array[3], Array[2]]
// Not a desired result???

const spread2 = [...array2, ...array3];
console.log(spread2); //["d", "e", "f", "g", "h"]

array2.push(...array3);
console.log(array2); //["d", "e", "f", "g", "h"]
// array2 is mutated
