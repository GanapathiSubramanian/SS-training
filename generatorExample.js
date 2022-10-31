function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

// "generator function" creates "generator object"
let generator = generateSequence();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next()); // [object Generator]

module.exports = generateSequence()
