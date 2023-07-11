var array = [1, 2, 3];
var index = 3; // Invalid index
console.log(array[index]); // Produces an error
// Correcting the error
if (index >= 0 && index < array.length) {
    console.log(array[index]);
}
else {
    console.log('Invalid index');
}
