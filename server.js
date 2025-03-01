//introduction to node.js, following along with tutorial


console.log('hello world')
//console.log(global);

//commonJS modules used instead of ES6
const os = require('os')
const path = require('path')
const {add, subtract, multiply, divide} = require('./math')

/*
console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))


//SUPER USEFUL, gives you an object with all info about the file
console.log(path.parse(__filename))

*/

console.log(add(2, 3))
console.log(subtract(2, 3))
console.log(multiply(2, 3))
console.log(divide(2, 3))
