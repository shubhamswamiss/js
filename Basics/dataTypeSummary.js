// There are two types of data type
// 1. Primitive Data Types
// 2. Non Primitive Data Types

// 1. Primitive Data Types (Call By Value) (Uses Stack Memory)
//  Primitve data type are call by value data type means when assign varibale1 value to varibale2 then copy of value will be stored not original value

//  String, Number, Boolean, null, undefined, Symbol, BigInt

// e.g
// let a = 4;
// let b = a;
// console.log(a,b)
// b = 5;
// console.log(a, b)
// const id = Symbol('124');
// const anotherId = Symbol('124');
// console.log(id == anotherId);
// console.log(id, anotherId);
// console.log(typeof id, typeof anotherId);


// Original value is not change of primitive data type instead copy of value is changes

// 2. Non-Primitive (Call By Reference) (Uses Heap Memory)
//  Non primitive means original value of variable changes it shares reference of varible
  
// let userOne = {
//     email: "user@google.com",
//     upi: "user@ybl"
// }

// let userTwo = userOne;
// console.log(userOne, userTwo);

// userTwo.email = "shubham@google.com";
// console.log(userOne.email);
// console.log(userTwo.email);

// Original value chagnes in non primitive data types



   

