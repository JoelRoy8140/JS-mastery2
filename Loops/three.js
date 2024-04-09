// for of loop

const arr = ["flash", "batman", "superman"]

for (const num of arr) {
    // console.log(num);
}


const greetings = "Hello world"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
}

// maps 

const map = new Map()
map.set("name", "john")
map.set("age", 30)

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

const myObject = {
    'Game1': 'Cricket',
    'Game2': 'Football'

}
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    

}