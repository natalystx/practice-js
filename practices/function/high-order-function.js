/*     
    First, what is a Higher Order Function (HOF)?
    A Higher Order Function is a function that takes one or more functions as arguments or returns a function as its result.

    Example: 
    function sayName(name) {
        console.log(name);
    }

    The greeting function extends the sayName function to greet a person
    function greeting(name) {
        sayName("Hello, " + name);
    }

    Instruction: Implement a function named "hof" that takes an "add" function, which simply adds two numbers together, and two numbers "a" and "b" as arguments.

    Your task is to square the result of the add function and return it.
    (A square number is the result of multiplying a number by itself.)

    PS: All parameters will never be undefined or null, and "a" and "b" will always be numbers.
*/

export function hof(add, a, b) {
  // write your code here
}
