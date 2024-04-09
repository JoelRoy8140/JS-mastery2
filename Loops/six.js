// const coding = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];

// const values = coding.forEach( function (item) {
//     // console.log(item);
//     return item  // for each can't return anything, it just executes the code inside of it
// } )

// console.log(values)



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums); // filter is used to filter out the elements from the array based on the condition given in arrow functions or normal functions or
//                         // filter returns a new array with the elements that satisfy the condition given in the function

const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )

// console.log(newNums)

const books = [
    {
      title: "The Great Gatsby",
      genre: "Fiction",
      publish: "Scribner",
      edition: "First Edition"
    },
    {
      title: "To Kill a Mockingbird",
      genre: "Fiction",
      publish: 2011,
      edition: "First Edition"
    },
    {
      title: "1984",
      genre: "Dystopian",
      publish: 2010,
      edition: "First Edition"
    },
    {
      title: "The Catcher in the Rye",
      genre: "Fiction",
      publish: 2000,
      edition: "First Edition"
    }
  ];

  let  userBooks = books.filter( (bk) => bk.genre === 'Fiction')

   userBooks = books.filter( (bk) => {return bk.publish >= 2000 && bk.genre === 'Fiction'})

  console.log(userBooks);