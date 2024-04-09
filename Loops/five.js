const coding = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];

coding.forEach( function (item) {
    // console.log(item);
} )

coding.forEach( (item) => {
    // console.log(item);

} )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


const Mycoding = [{
    languageName: "JavaScript",
    languageFileName: "js"
},
{
    languageName: "Java",
    languageFileName: "java"
},
{
    languageName: "Python",
    languageFileName: "py"
},

]

Mycoding.forEach( (item) => {
    console.log(item.languageName, item.languageFileName);
} )