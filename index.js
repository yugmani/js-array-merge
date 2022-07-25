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

const pushed1 = array1.push(array2);
console.log(pushed1);