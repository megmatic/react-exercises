// function Person(name, email, phone) {
//   this.name = name;
//   this.email = email;
//   this.phone = phone;
// }

// Person.prototype.greet = function (other) {
//   console.log("Hello " + other.name + ", I am " + this.name + "!");
// };

// // Instantiate an instance object of Person with name of 'Sonny', email of 'sonny@hotmail.com', and phone of '483-485-4948', store it in the variable sonny.
// let sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948')

// // Instantiate another person with the name of 'Jordan', email of 'jordan@aol.com', and phone of '495-586-3456', store it in the variable 'jordan'.
// let jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456')

// // Have sonny greet jordan using the greet method.
// console.log(sonny.greet(jordan))

// // Have jordan greet sonny using the greet method.
// console.log(jordan.greet(sonny))

// // Write a statement to print the contact info (email and phone) of Sonny.
// console.log(`Hello, my name is ${sonny.name} and my email address is ${sonny.email} and my phone number is ${sonny.phone}`)

// // Write another statement to print the contact info of Jordan.
// console.log(`Hello, my name is ${jordan.name} and my email address is ${jordan.email} and my phone number is ${jordan.phone}`)

// Refactor the Person Object Constructor to use a Class. You should be able to run the same code you already have to complete the exercises above.

class Person {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  greet(other) {
    console.log("Hello " + other.name + ", I am " + this.name + "!");
  }
}

let sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948')

// Instantiate another person with the name of 'Jordan', email of 'jordan@aol.com', and phone of '495-586-3456', store it in the variable 'jordan'.
let jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456')

// Have sonny greet jordan using the greet method.
console.log(sonny.greet(jordan))

// Have jordan greet sonny using the greet method.
console.log(jordan.greet(sonny))

// Write a statement to print the contact info (email and phone) of Sonny.
console.log(`Hello, my name is ${sonny.name} and my email address is ${sonny.email} and my phone number is ${sonny.phone}`)

// Write another statement to print the contact info of Jordan.
console.log(`Hello, my name is ${jordan.name} and my email address is ${jordan.email} and my phone number is ${jordan.phone}`)
