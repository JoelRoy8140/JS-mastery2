
if (true){
    let a = 40
    const b = 50
    var c = 60
    
}

for (let i = 0; i < 10; i++){
    // console.log(i)
}

// console.log(a);
// console.log(b);
// console.log(c);   // intresting thing is that var is not block scoped but let and const are block scoped

function one(){
    const username = "Joel"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "Joel"
    if(username === "Joel") {

        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

 // ****************************************intresting****************************

console.log( addone(5));

 function addone(num){
    return num + 1

 }

// addTwo(5)
const addTwo  = function(num){
    return num + 2
 }


