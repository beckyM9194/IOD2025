// 8. Using the following starter code, create a decorator function to validate function arguments 
// as strings. Test it by decorating the given orderItems function below. 

function orderItems(itemName) { 
    return `Order placed for: ${itemName}`; 
} 
 
// create a decorated version of the original function 
const validatedOrderItem = validateStringArg(orderItems); 
 
console.log(validatedOrderItem("Apple Watch")); // should run the function 
console.log(validatedOrderItem(123)); // should throw an error 
 
// a) Create a decorator function validateStringArg(fn) which will validate an argument passed to fn to ensure that it is a string, throwing an error if not 
// b) Extend orderItems to use the ... rest operator, allowing multiple item name arguments, and include them all in the returned string 
// c) Extend the decorator function to validate as strings all arguments passed to fn 
// d) When testing the decorated function, use try-catch blocks to handle errors thrown for non-string arguments 

function orderItems(itemName) {
return `Order placed for: ${itemName}`;
}
// create a decorated version of the original function

// const validatedOrderItem = validateStringArg(orderItems);

// console.log(validatedOrderItem("Apple Watch")); // should run the funct

// create a decorated version of the original function

// const validatedOrderItem = validateStringArg(orderItems);

// console.log(validatedOrderItem("Apple Watch")); // should run the funct

//B
function orderItems(...itemNames) {
    return `Order placed for: ${itemNames.join(', ')}`
}
//A
function validateStringArg(fn) {
    return function (arg) {
        if(typeof arg !== 'string') {
            throw new Error("Argument must be a string") 
            return
        }
        return fn(arg)  
    }
}
//C
function validateStringArgs(fn) {
    return function() {
        for (let arg of arguments) {
            if(typeof arg !== 'string') {
                throw new Error(`Argument must be a string: ${arg}`)
            }    
        }
        return fn.apply(this, arguments)
    }
}
const validatedOrderItem = validateStringArgs(orderItems)
const validateOrderItems = validateStringArg(orderItems)
try {
    console.log(validatedOrderItem("Apple Watch"))  
} catch (err) {
    console.log(err)
}






