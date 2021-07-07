// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function myFullName() {
  let firstName = "Denton ";
  function secondName() {
    let middleName = "Tyler ";
    function thirdName() {
      let lastName = "Warnock"
      return console.log(`My full name is ` + firstName + middleName + lastName);
    }
    thirdName();
  }
  secondName();
}

myFullName();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ==== 
  // Return a function that when invoked increments and returns a counter variable.
const counter = () => {
  let count = 0;
  return () => {count++; return count};
}

const newCounter = counter();

console.log(newCounter()); // 1
console.log(newCounter()); // 2
console.log(newCounter()); // 3

// console.log(counter()()); // 1
// console.log(counter()()); // 1 --> note that counter does not increase this this type of induction..

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
const counterFactory = () => {
  let count = 0;
  return {
    increment: function() {return ++count},
    decrement: function() {return --count},
  }
};

newCounterFactory = counterFactory();

console.log(newCounterFactory.increment()); // 1
console.log(newCounterFactory.increment()); // 2
console.log(newCounterFactory.increment()); // 3
console.log(newCounterFactory.decrement()); // 2
console.log(newCounterFactory.decrement()); // 1
