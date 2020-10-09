const assert = require('assert')

const sum = (...numbers) => {
    let total = 0
    for (number of numbers) total += number
    return total
}

assert.deepStrictEqual(sum(), 0)
assert.deepStrictEqual(sum(1), 1)
assert.deepStrictEqual(sum(1, 2), 3)
assert.deepStrictEqual(sum(1, 2, 3), 6)
assert.deepStrictEqual(sum(1, 2, 3, 4), 10)