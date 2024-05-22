/*
  Instruction: Implement a function named "mapper" that takes an array of user objects.
  The shape of a user object is as follows:
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 18,
    gender: "male",
    dob: "1999-10-14",
    active: 0
  }
  Your task is to transform the object into the following shape:
  {
    name: "John Doe", // Combine firstName and lastName together
    active: true | false, // Change from number 0 | 1 to boolean
    age: '18 y/o',
  }
  Then return the transformed objects in an array.

  Note: The input object will never be undefined or null.
*/

export function mapper(users) {
  // write your code here
}
