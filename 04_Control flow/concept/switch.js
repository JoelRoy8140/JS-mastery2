// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;                            // if done break here, it will only print March and won't go to the next line
    case "april":
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
}