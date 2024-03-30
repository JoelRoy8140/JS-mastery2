// primitive

// 7 types : string, number, bigint, boolean, null, undefined, symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined // or let userEmail;

const id = Symbol('132')
const anotherId = Symbol('132')

console.log(id === anotherId)

const bigNumber = 1234567890123456789012345678901234567890n
console.log(bigNumber)




// reference type (Non - primitive)

// Array , objects, functions

const heros = ['superman', 'batman', 'flash']; //array
let myObj = {                                // object
    name: "joel",
    age: 21,

}

const myFunction = function (){
    console.log("hello world")
}

console.log(typeof heros)
console.log(typeof bigNumber)
console.log(typeof myFunction)


