// for

for (let i = 0; i <= 20; i++) {
    const element = i;
    if(element == 5) {
        console.log("5 is best number");
    }
    // console.log(element);
    
}



for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value ${j} and inner loop value ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
        
        
    }
    
}
let myArray = [1,2,3,4,5,6,7,8,9,10];
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    
    const element = myArray[index];
    console.log(element);
    
}


//  break and continue

for (let index = 1; index <=20; index++) {
    if(index == 5){
        console.log(`detectd 5`);
        break // breaks the loop
    }
    // console.log(`value of i is ${index}`);
    
}
for (let index = 1; index <=20; index++) {
    if(index == 5){
        console.log(`detectd 5`);
        continue // ignores the warning and goes on..
    }
    console.log(`value of i is ${index}`);
    
}

