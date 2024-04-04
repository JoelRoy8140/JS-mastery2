const tinderUser = {} // singleton obejct

tinderUser.id = "123abc"
tinderUser.name = "john"
tinderUser.isLoggedIn = false

// console.log(tinderUser) // non singleton object

const regularUser = {
    email: "hi@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Joel",
            lastname: "Roy"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "a", 5: "b", 6: "c"}
const obj4 = {7: "a", 8: "b", 9: "c"}


// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) // {} stores the other objects in empty data

const obj3 = {...obj1, ...obj2}
// console.log(obj3) 

const users = [
    {
    id: 1,
    email: "jpp@gmail.com"
    },
    {
        id: 2,
        email: "jpp@gmail.com"
    },
    {
        id: 3,
        email: "jpp@gmail.com"
    },
]

console.log(users[1].email)
console.log(tinderUser)

console.log(Object.keys(tinderUser)); // to find out the keys of tinderuser
console.log(Object.values(tinderUser)); // to find out the values of tinderuser
console.log(Object.entries(tinderUser)); // seprate out each other and form seprate array 

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check if the particular object has this property or not


const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "Joel Roy"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);

// const navbar = ({company}) => {

// }

// navbar(company = "Joel") // this is in react

//API

// {
//     "name": "Joel",
//     "coursename": "JS in hindi",
//     "price": "free",
// }

[
    {},
    {},
    {}
]



