const mySym = Symbol("Key1")

const JsUser = {
    name: "Joel",
    "full Name" : "Joel David Ramirez Gutierrez",
    [mySym]: "myKey1", 
    age: 18, 
    location: "Rajula",
    email: "Joelroy12@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["full Name"]) // this can only be accessed by putting full nae in bracket
// console.log(typeof JsUser[mySym])
// console.log(JsUser [mySym]) 

JsUser.email = "joel123@mail.com" // you can override objects
// Object.freeze(JsUser) // it freezes the object any changes after that will not be made
JsUser.email = "arya123@mail.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hi there!")
}
JsUser.greetingTwo = function(){
    console.log(`Hi there!,  ${this.name}`); // string interpolation (`) dont ever forget that
}



console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


