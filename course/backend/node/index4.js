let fs = require ('fs')

fs.readFile(process.argv[2], (error, data) => {
    if (error){
        return console.log('error')
    }
    let str = data.toString().split('\n')
    console.log(str.length-1)
    }
)

// SOLUCION OFICIAL

// var fs = require('fs')
// var file = process.argv[2]

// fs.readFile(file, function (err, contents) {
//   if (err) {
//     return console.log(err)
//   }
//   // fs.readFile(file, 'utf8', callback) también se puede utilizar
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })

