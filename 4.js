const assert = require('assert')

const people = [{
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

const bornIn20Century = (year) => year >= 1901 && year <= 2000
const isAustralian = (nationality) => nationality === "Australian"
const filterPeople = (people) => people.filter(
    ({ bornIn, nationality }) => bornIn20Century(bornIn) && isAustralian(nationality)
);
// filter cria um novo array com tyodos os elementos que passaram no teste.

const filteredPeople = filterPeople(people);

assert.deepStrictEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepStrictEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })