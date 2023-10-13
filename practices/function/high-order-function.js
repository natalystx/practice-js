/*     
    First, What is a High Order Function (HOF)?
    High Order Function is a function that extends or enhances another function and provide new functionality.

    example: 
        function sayName(name){
            console.log(name)
        }


        describe: the greeting function extends sayName function to greeting some person
        function greeting(name){
            sayName("Hello, "  + name)
        }



    Instruction: Implement a function named "hof" the function will takes 
    "add" function which simply add up two number together
    "a", "b" are a number

    your task is make the result from add function to a square number then return them
    https://en.wikipedia.org/wiki/Square_number

    PS: all parameter will never be undefined or null, a and b are always number
*/

export function hof(add, a, b) {
  // write your code here
}
