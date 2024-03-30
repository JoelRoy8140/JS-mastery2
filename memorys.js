// stack (primitive) , heap (Non-primitive)

let myName = "joelroy"

let anotherName = myName
anotherName = "joel"

console.log(anotherName)

let userOne = {
    email: "user@gmail.com",
    upi: "user@okaxis"
}

let userTwo = userOne

userTwo.email = "newUser@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)