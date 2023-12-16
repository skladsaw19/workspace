var message = "in global";
console.log("global: message = " + message);

var a = function () {
  var message = "inside a";
  console.log("a: message = " + message);
  b();
}


  function b () {
    console.log("b: message = " + message); 
  }

  b();

a();

// Global Scope: The global execution context
let globalVariable = 'I am in the global scope';

function firstLevelFunction() {
    // firstLevelFunction's execution context
    let firstLevelVariable = 'I am in the first level scope';

    function secondLevelFunction() {
        // secondLevelFunction's execution context
        let secondLevelVariable = 'I am in the second level scope';

        // Scope Chain Lookup
        console.log(secondLevelVariable);   // Output: I am in the second level scope
        console.log(firstLevelVariable);    // Output: I am in the first level scope (found in the outer reference of secondLevelFunction)
        console.log(globalVariable);        // Output: I am in the global scope (found in the outer reference of firstLevelFunction, which is global)
    }

    secondLevelFunction();

    // Trying to access variables from inner scopes (will result in ReferenceError)
    // console.log(secondLevelVariable);   // Error: secondLevelVariable is not defined in this scope
}

firstLevelFunction();

// Trying to access variables from inner scopes (will result in ReferenceError)
// console.log(firstLevelVariable);    // Error: firstLevelVariable is not defined in this scope

/*Explanation of the Scope Chain in the Example:
Global Scope: The globalVariable is declared in the global scope, which is the top-level environment. Any variable declared here is accessible anywhere in the code.

First Level Function Scope: firstLevelFunction creates a new scope, where firstLevelVariable is declared. It has access to its own variables as well as variables from the global scope.

Second Level Function Scope: secondLevelFunction is nested within firstLevelFunction, creating another level of scope. It can access its own variable (secondLevelVariable), variables from firstLevelFunction (firstLevelVariable), and variables from the global scope (globalVariable).

Scope Chain Lookup: When a variable is used, JavaScript engine looks it up in the current scope. If not found, it looks in the outer reference's scope. This process continues up the scope chain until the global scope is reached. If the variable is not found in the global scope, it results in undefined.

Access Restrictions: Variables in an inner scope are not accessible from an outer scope. For example, secondLevelVariable cannot be accessed from firstLevelFunction or the global scope.*/


function createGreeting(name) {
  let greetingIntro = "Hello";

  function displayName() {
      // displayName() is the inner function, a closure
      // It has access to the outer function's variable "greetingIntro"
      console.log(`${greetingIntro}, ${name}!`);
  }

  return displayName;
}

const greetJohn = createGreeting("John");
greetJohn(); // Outputs: Hello, John!

/*In this example:

createGreeting function creates a local variable greetingIntro.

displayName is a nested function that forms a closure. It has access to greetingIntro because of the scope chain.

createGreeting is called with "John" as an argument, and it returns the displayName function, which is stored in greetJohn.

When greetJohn() is called, the displayName function is executed, accessing greetingIntro from the scope chain to complete the greeting message.

This use case is simple but powerful, demonstrating how an inner function (closure) can maintain access to its parent function's scope even after the parent function has finished executing. This pattern is widely used in JavaScript for encapsulating functionality, creating private variables, and managing state in an elegant way.*/  


/* Object type*/

// Number: A numeric data type in JavaScript.
let age = 25; // Integer
let price = 19.95; // Floating-point number

// String: A sequence of characters used to represent text.
let name = "John Doe";
let greeting = 'Hello, World!';

// Boolean: A true or false value.
let isActive = true;
let isVerified = false;

// Undefined: A variable that has been declared but not assigned a value.
let jobTitle;
console.log(jobTitle); // Outputs: undefined

// Null: An assignment value that represents no value or non-existent value.
let currentTask = null;
console.log(currentTask); // Outputs: null

// Symbol: A unique and immutable data type that may be used as an identifier for object properties.
let sym = Symbol('uniqueIdentifier');

// Object: A collection of properties, where each property is defined as a key-value pair.
let person = {
    name: "John Doe",
    age: 30,
    hobbies: ['reading', 'gaming', 'sports']
};

// Demonstration of accessing the various types
console.log('Age:', age); // Outputs: Age: 25
console.log('Name:', name); // Outputs: Name: John Doe
console.log('Is Active:', isActive); // Outputs: Is Active: true
console.log('Job Title:', jobTitle); // Outputs: Job Title: undefined
console.log('Current Task:', currentTask); // Outputs: Current Task: null
console.log('Unique Symbol:', sym); // Outputs: Unique Symbol: Symbol(uniqueIdentifier)
console.log('Person Object:', person); // Outputs: Person Object: { name: 'John Doe', age: 30, hobbies: ['reading', 'gaming', 'sports'] }
