let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 24) // to create your own date
// let myCreatedDate = new Date("2024-01-24") // yy/mm/dd format
let myCreatedDate = new Date("01-14-2024") 

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // convert to seconds

let newDate = new Date()
// console.log(newDate.getMonth())
// console.log(newDate.getDay())

 //`${newDate.getDay( )}`; an the time is

 newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric'
       
 })
 console.log(newDate.toLocaleTimeString());

