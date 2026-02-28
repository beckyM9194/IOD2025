/*10. The following constructor function creates a new Person object with the given name and 
age values. 
a) Create a new person using the constructor function and store it in a variable 
b) Create a second person using different name and age values and store it in a separate variable 
c) Print out the properties of each person object to the console  
d) Rewrite the constructor function as a class called PersonClass and use it to create a third person using 
different name and age values.Print it to the console as well. 
e) Add a canDrive method to both the constructor function and the class that returns true if the person 
is old enough to drive. */

// function Person(name, age) { 
// this.name = name; 
// this.age = age; 
// this.human = true; 
// canDrive() {
//     return this.age.number >= 20
// }
// } 
// //a.
//  let Person1 = new Person('Kim','26',)
// //b.
// let Person2 = new Person('Bob','55')
// //c.
// console.log(Person1)
// console.log(Person2)

// //d.
// class Personclass {
//     constructor(name, age, human) {
//         this.name = name;
//         this.age = age;
//         this.human = true;
//     }
//     //e.
//     canDrive() {
//     return this.age.number >= 20
// }
// }
//  let Person3 = new Personclass('Rick', '33')
// console.log(Person3)

// console.log(Person3.canDrive())

//In class
10.
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = () => this.age >=16
}
let person1 = new Person('Jone', 30)
let person2 = new Person('Jane', 30)
class PersonClass {
    constructor(name, age) {
        this,name = name
        this.age = age
        this.human = true
    }
    canDrive() {
        return this.age >=16
    }
}
let person3 = new Person('Jack', 30)
console.log(person1)
console.log(person2)
console.log(person3)
if (person1.canDrive()) console.log(person1.name + ' is '+person1.age+' and is old enough to drive.')
if (person2.canDrive()) console.log(person2.name + ' is '+person2.age+' and is old enough to drive.')
if (person3.canDrive()) console.log(person3.name + ' is '+person3.age+' and is old enough to drive.')








