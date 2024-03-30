let name = "joel";
let repoCount = 9;

console.log(`my name is ${name} and my repoCount is ${repoCount}`);

const gameName = String('Joel')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt('2'));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0, 2);
console.log(newString);

console.log(gameName.slice(2, 3));
console.log(gameName.slice(-1));

const newStringOne = "      Joel      "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://www.joel.com/joel%20Roy";
console.log(url.replace('%20', '-'));

console.log(url.includes('ho'));

console.log(gameName.split('-'));

