/*8. The object below represents a single city. 
a) Write a function that takes an object as an argument and uses a for…in loop to access and print to the console each 
of those object properties and their values. Test it using the sydney object below. 
b) Create a new object for a different city with different properties and call your function 
again with the new object.*/

const sydney = { 
    name: 'Sydney', 
    population: 5_121_000, 
    state: 'NSW', 
    founded: '26 January 1788', 
    timezone: 'Australia/Sydney' 
} 
  for(let key in sydney) {
    console.log('key: ' + key);
    console.log('value: ' + sydney[key]);
  }

const mexico = {
    name: 'Mexico',
    population: 10_125_000,
    state: 'NSW',
    founded: '27 January 1789',
    timezone: 'Central/Pacfic'
}
 for(let key in mexico) {
    console.log('key: ' + key);
    console.log('value: ' + mexico[key]);
  }



