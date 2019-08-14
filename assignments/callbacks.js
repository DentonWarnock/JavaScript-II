// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution 
// to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
let lengthMessage = (print) => {
  return console.log('The length of the array is: ' + print);
}
getLength(items, lengthMessage);


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr.length - 1);
}
lastMessage = (print) => {
  return console.log('The last item of the array is: ' + print);
}
last(items, lastMessage);


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
sumMessage = (sum) => {
  return console.log('The sum of the two numbers is: ' + sum);
}
sumNums(25, 50, sumMessage); // 75

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}
multiplyNums(3, 4, (product) => {
  return console.log('The product of the two numbers is : ' + product);
}) // 12

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item));
}
tfMessage = (tf) => {
  return console.log('It is ' + tf + ' that the item is present in the list(case sensitive).');
}
contains("Pencil", items, tfMessage); // True statement
contains("Stickers", items, tfMessage); // False statement

/* STRETCH PROBLEM */

let duplicate = ['one', 'two', 'two', 'three', 'three', 'three'];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let noDuplicates = array.filter((string, index) => array.indexOf(string) === index); //needed help to find this answer
  return cb(noDuplicates);
}

removeDuplicates(duplicate, (print) => {
  return console.log(`Here is a list with no duplicates in it: ${print}.`);
})

