const assert = require('assert')

// escreva greet abaixo
const greet = (name, saud = 'Hi') => `${saud} ${name}`;

assert.deepStrictEqual(greet("John"), "Hi John")
assert.deepStrictEqual(greet("John", "Good morning"), "Good morning John")
assert.deepStrictEqual(greet("Isabela", "Oi"), "Oi Isabela")

console.log(greet('Adriano', 'SEU LINDO'))