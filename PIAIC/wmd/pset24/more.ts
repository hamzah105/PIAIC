let name = 'Hamza';

console.log("Is name equal to 'Hamza'? I predict true.");
console.log(name === 'Hamza');
console.log("Is name not equal to 'Rehan'? I predict true.");
console.log(name !== 'Rehan');

console.log("Is name equal to 'Ali'? I predict false.");
console.log(name === 'Ali');

console.log("Is name not equal to 'Saad'? I predict false.");
console.log(name !== 'Saad');

let country = 'PAkistan';
console.log("Is country in lowercase equal to 'PAkistan'? I predict true.");
console.log(country.toLowerCase() === 'PAkistan');

console.log("Is country in lowercase not equal to 'PAkistan'? I predict false.");
console.log(country.toLowerCase() !== 'PAkistan');

let num1 = 10;
let num2 = 5;

console.log("Is num1 equal to num2? I predict false.");
console.log(num1 === num2);

console.log("Is num1 not equal to num2? I predict true.");
console.log(num1 !== num2);

console.log("Is num1 greater than num2? I predict true.");
console.log(num1 > num2);

console.log("Is num1 less than or equal to num2? I predict false.");
console.log(num1 <= num2);

let age = 25;
let hasLicense = true;
console.log("Is age greater than 18 and hasLicense is true? I predict true.");
console.log(age > 18 && hasLicense);

console.log("Is age less than 18 or hasLicense is false? I predict false.");
console.log(age < 18 || !hasLicense);

let fruits = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the fruits array? I predict true.");
console.log(fruits.includes('banana'));

console.log("Is 'grape' in the fruits array? I predict false.");
console.log(fruits.includes('grape'));

let colors = ['red', 'blue', 'green'];

console.log("Is 'yellow' not in the colors array? I predict true.");
console.log(!colors.includes('yellow'));

console.log("Is 'blue' not in the colors array? I predict false.");
console.log(!colors.includes('blue'));