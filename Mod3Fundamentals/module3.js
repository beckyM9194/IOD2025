/* code block comment
function printConsoleMessage() {
console.log('I am commented out')
}
*/

//let one = 1
//let two = 2
//let three = 3

//console.log(one + two - three * two / one)

//const bigint_valid = 1234567890123456789012345n;
//const bigint_invalid = 1234567890123456789012345; // too large for standard integers

//console.log(bigint_valid == bigint_invalid) // false

//const doubleQuotes = "String that can include 'single quotes'"
//const singleQuotes = 'String that can include "double quotes"'
//const backTicks = `String that can include variables - ${singleQuotes}`

//let isChecked = false; 
//let isToggleOn = true

//isChceked = !isChecked
//console.log(isChecked)

// age = null

 //console.log(age)

 //let location = 

 //console.log(location)

 //let location
 //let age = null

//console.log(`${location} == ${age} ? ${location == age}`) // true (uses == to check value equivalence)
//console.log(`${location} === ${age} ? ${location === age}`) // false (uses === to check type equality)

//const tv = { // object starts here
//brand: "Sony Bravia", // key-value pair. brand is the key, "Sony Bravia" is the value
//size: "55-inch", // values can be any data type
//model: 2026,  // multiple key-value pairs are separated by commas
//resolution: "5K" // the comma on the last key-value pair can be omitted
//} // object ends here. All data is stored in tv variable.
//console.log(tv)

//console.log(typeof undefined); // undefined
//console.log(typeof 0); // number
//console.log(typeof 10n); // bigint
//console.log(typeof true); // boolean
//console.log(typeof 'text'); // string
//console.log(typeof Symbol('id')) // symbol
//console.log(typeof Math); // object
//console.log(typeof null); // object
//console.log(typeof console.log); // function
//console.log(typeof "hey") //string
//console.log(typeof `hey`) //string

//expliciy string class- 23
//console.log(String(false))

//implicit conversion -23
//console.log("1"+ 2 + 3)

//console.log( 1 + 2 + "3" + 5 + 5)

//console.log( 1+ 2 + 6 + "5")

//console.log( Number("      4    ") ) // 4 - trims spaces  
//console.log( Number(null) ) // 0 - intentionally empty value converts to 0
//console.log( Number(undefined) ) // NaN - non-existent value is unknown
//console.log( Number(false) ) // 0 - false converts to 0
//console.log( Number(true) ) // 1 - true converts to 1
//console.log( Number("") ) // 0 - empty string converts to 0
//console.log( Number("not a number") ) // NaN - non-empty strings beginning with chars cannot convert

//console.log("6" / "2")
//console.log("6" * "2")
//console.log("6" - "2")
//console.log(+ "6")
//console.log(+"6" + 5 + 5)

//console.log( Boolean("")) //false
//console.log( Boolean(0)) //false
//console.log( Boolean(null))
//console.log( Boolean (undefined))
//console.log( Boolean(NaN))
//console.log( Boolean("falseghthh"))
//console.log( Boolean(-14436346))

//if ("") console.log('empty string is true') // implicit "" conversion to false - won't print msg
//if (undefined) console.log('undefined is true') // implicit conversion to false - won't print ms

//console.log( NaN ? 'NaN is true' : 'NaN is false' ) // NaN is false
//console.log( 0 ? 'zero is true' : 'zero is false' ) // zero is false
//console.log( "hello" ? 'hello is true' : 'hello is false' ) // hello is true

///console.log( !undefined)
//console.log( !!"")

//console.log('apple' < 'banana'); // true - because a is less than b (rule 2)
//console.log('eat' < 'eaten'); // true - because all characters are the same but eaten is longer (rule 5)

//console.log("2" > 1)
//console.log("2" != 1)
//console.log("02" == 2)
//console.log(true == 1)
//console.log(false == 0)
//console.log(null == undefined )

//function helloWorld() {
   // console.log('hello wordld')
//}
//helloWorld()

//function checkAge(age){
   // if (age >= 18) {
       // return 'adult'
  //  } 
  //  return 'non-adult'
//}

//console.log( checkAge(21))
//console.log( checkAge(13))

//const sayHi = function() {
   // console.log('Hi')
//}

//sayHi()

//sayHiExpression()  slide-35
//sayHiDeclaration()

//const sayHiExpression = function() {
    //console.log('Hi')
//}

//function sayHiDeclaration() {
   // console.log('Hi')
//}

//sayHiExpression()

//const sayHiArrow = () => console.log('Hi') // arrow function syntax, more concis

//sayHiArrow()

//const subtract1 = (a, b) => a - b; // most concise version of the below
//const subtract2 = (a, b) => { return a - b }; // does the same thing as above

//const sayHiExpression = function() {
//console.log('Hi');
//console.log(arguments);
//}

//function sayHiDeclaration() {
//console.log('Hi');
//console.log(arguments);
//}

//const sayHiArrow = () => { 
//console.log('Hi'); 
//console.log(arguments);
//}

//sayHiDeclaration()
//sayHiExpression()
//sayHiArrow()

//const user = new Object()
//const user = {}

//const user = { // user object contained within curly braces
//name: 'joe', // string property with key 'name' and value 'joe'
//age: 20, // numeric property with key 'age' and value 20
//'has a dog' : true
//};

//console.log(user.name); // get object property called name and log it
//let dogOwner = user['has a dog']; // get value of property 'has a dog' and assign to new variable
//user.age = 21; // set (or assign) new value to object property called age
//console.log(user.age)


//user.location = 'NSW'; // create new object property called location and set (assign) a value
//console.log(user.location)
//delete user.location; // delete property of user object called locatio
//console.log(user.location)

//2: 'value of numeric property',
//'2': 'value of string property'
//}
//console.log(object) // { '2': 'value of string property' } since 2 and ‘2’ are sam

//const phone = {
//model: 'iPhone 17 pro max ultra',
//color: 'orange'
//storage: 203503

//if (phone.color) console.log(`My ${phone.model} is ${phone.color}`) // prints message
//if (phone.storage) { // undefined counts as false, so the below won't print
//console.log(`My ${phone.model} has ${phone.storage}GB`)

//let goal = 5;
//for (let i = 0; i < goal; i++) {
   // console.log(`Iteration ${i} of ${goal}`)
//}

//let person1 = { name: 'Anna' }; // object - stored by reference
//let person2 = person1; // person2 points to same memory location as person1
//person1.name = 'Brian';
//console.log(person2.name); // Brian, even though we changed person1.name

//let person3 = 'Carly'; // string - stored by value
//let person4 = person3; // person4 points to separate memory location than person3, but both store same 
//person3 = 'David';
//console.log(person4); // still Carly, since person3 and person4 are string primitives and store 

//const user = { name: 'Elliot', age: 27 };
//const userClone = {}; 

//for (let key in user) { // iterate over user properties
//userClone[key] = user[key]; // re-create them in userClone
//}

//console.log(userClone)

//const userClone = {...user}

//const userClone = {...user, age: 28, location: New Zealand};

//console.log(userClone)

//const vehicle = { make: 'Toyota', model: 'Camry'};
//const mergedUser = {...user, ...vehicle};
//console.log(mergedUser); // { name: 'Elliot', age: 27, make: 'Toyota', model: 'Camry' 

const box1 = {
weight: '20kg',
dimensions: { // nested object property
width: '30cm',
height: '10cm'
}
}
const box2 = {...box1}; // shallow clone
box1.dimensions.height = '12cm'; // change box1 nested object property
console.log(box2); // box2 references box1 dimensions and picks up height chang

const user = {
name: 'Bilbo Baggins',
sing: function() { // method of user object
console.log('Roads go ever ever on');
},
sing2() { // shorthand method syntax, does same as above
console.log('Over rock and under tree');
}
}
user.sing(); // Roads go ever ever on
user.sing2(); // Over rock and under tree

const user = {
name: 'Bilbo Baggins',
printGreeting() {
console.log(`Hello, I'm ${this.name}`) // 'this' is the current object
}
}
// 'user' is before the dot, provides the context where 'this' comes from
user.printGreeting(); // Hello, I'm Bilbo Baggin

function User(first, last) { // constructor function
this.first = first;
this.last = last;
this.hasShortName = () => this.first.length <= 3;
}
// we can create multiple users with different names
let user1 = new User('Tim', 'Smith'); // need to use 'new'
console.log(user1); // User { first: 'Tim', last: 'Smith' }
console.log(user1.hasShortName()); // true

function User(first, last) { // constructor function
//this = {}; // implicitly
this.first = first;
this.last = last;
this.hasShortName = () => this.first.length <= 3;
//return this; // implicitly
}

class User {
constructor(first, last) {
this.first = first;
this.last = last;
}
hasShortName() {
return this.first.length >= 3
}
}
let user2 = new User('Tina', 'Smith') // need to use 'new'
console.log(user2) // User { first: 'Tina', last: 'Smith' }
console.log(user2.hasShortName()) // fals











