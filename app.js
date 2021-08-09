
//const add = require('./util.js')
//const difference = require('./util.js')
//const sum = add(2, 9)
//const sub = difference(6,4)
//console.log(sum)
//console.log(sub)


const validator = require('validator')
const getNotes= require('./note.js')
const msg = getNotes()
console.log(msg)

console.log(validator.isEmail('keerthi@example.com'))