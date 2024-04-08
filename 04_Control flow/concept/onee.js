// if

// const isUserLoggedIn = true

// const temperature = 45

// if (temperature === 40){
//     console.log('less than 40')

// } else{
// console.log("temperature is greater than 50")
// }

//>,<,>=,<=,==,===,!=,!== are comparison operators. They are used to compare two values.



// const score = 200

// if (score > 100){
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);



// const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2");  // dont ever do this

// if(balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 1000");

// } else {
//     console.log("less than 1200");
// }




const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(UserLoggedIn && debitCard && 2==3){
    console.log("user can make payment");
}

if(loggedInFromGoogle || loggedInFromEmail){          //  || is OR operator, it will return true even one of the conditions
    console.log("user can login");
}



