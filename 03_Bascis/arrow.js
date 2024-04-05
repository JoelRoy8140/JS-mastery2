const user = {
    username: "Joel",
    price: 200,
    

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
        // console.log(this); // show the current context or values

    }

}

// user.welcomeMessage()
// user.username = "sam" // overrided the first username
// user.welcomeMessage()

// console.log(this);  // it is is outside so the current context is empty

// function chai(){
//     let username = "Joel"
//     console.log(this.username);
// }
// chai()

const chai =  () => {
    let username = "Joel"
    console.log(this);
}


// chai()


// const addTwo = (num1, num2) =>   (num1 + num2) // ypu can do this without curly braces

// const addTwo = (num1, num2) =>   (num1 + num2) // ypu can do this without curly braces

const addTwo = (num1, num2) =>   {username: "Joel"}  // ypu can do this without curly braces



console.log(addTwo(5, 6));

// const myArray.forEach()