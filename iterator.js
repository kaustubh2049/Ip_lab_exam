// Example of Iterator
let colors = ["Red", "Green", "Blue"];

// Create an iterator
let colorIterator = colors[Symbol.iterator]();

console.log("Iterator Example:");
console.log(colorIterator.next().value); // Red
console.log(colorIterator.next().value); // Green
console.log(colorIterator.next().value); // Blue
console.log(colorIterator.next().done); // true (no more elements)
