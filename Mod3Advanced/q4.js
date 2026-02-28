// 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the sequence is the sum of the previous 2. 
//   e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc. 

// a) Write a function printFibonacci() using setInterval that outputs a number in the Fibonacci sequence every second. 

// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout calls to do the same thing 

// c) Extend one of the above functions to accept a limit argument, which tells it how many numbers to print before stopping.

//A

function printFibonacci() {
    let first = 1
    let second = 2
    console.log(first)
    console.log(second)
    setInterval(function printNext() {
        let next = first + second
        console.log(next)
        first = second
        second = next
    }, 1000)
}
//B
function printFibonacciTimeouts() {
    let [first, second] = [1,1]
    console.log(first)
    console.log(second)
    setTimeout(function printNext(first, second){
        let next = first+second
        console.log(next)
        setTimeout(printNext, 1000, second, next)   
    }, 1000, first, second)
}
//C
function printFibonacciLimit(limit) {
    let first = 1
    let second = 1
    console.log(first)
    console.log(second)

    let counter = 2
    let intervalRef = setInterval(function printNext() {
        let next = first+second
        console.log(next)
        first = second
        second = next
        counter++
        if(counter == limit) clearInterval(intervalRef)
    },1000)

}
printFibonacciLimit(10)














