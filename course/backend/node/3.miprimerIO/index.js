let fs = require ('fs')

let buf = fs.readFileSync(process.argv[2])

let str = buf.toString().split('\n')

console.log(str.length-1)

// SOLUCION OFICIAL

// var fs = require('fs')

// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)