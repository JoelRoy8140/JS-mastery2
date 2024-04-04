
function sayMyName(){
    console.log("f");
    console.log("f");
    console.log("h");
    console.log("j");
    console.log("i");

}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 / number2)
// }

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // console.log("Joel")
    return number1 + number2 // anything after result function will not be printed
}


const result = addTwoNumbers(3,4)
// console.log("Result:", result)

function loginUserMessage(username = "sam"){ // you ca also print from this
    if(username === undefined){
        console.log("Please provide a username")
        return

    }
    return `Welcome ${username}` 
}

// console.log(loginUserMessage('Joel'))
// console.log(loginUserMessage("joel")) // and also from this too

function calculateCartPrice(val1, val2, ...num1){      // the 100 & 200 went to val value // rest or spread operator depends upon use
    return num1

}

// console.log(calculateCartPrice(100,200,400,5000))

const user = {
    username: "Joel",
    price: 200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}

// handleObject(user)

handleObject({
    username: "Sam",
    price: 300
}) // you overrided it

const myNewArray = [1,2,3,4,5,6,7,8,9,10]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([1,2,3,4,5,6,7,8,9,10]))