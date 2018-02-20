const fs = require ('fs')
const path = require ('path')

const _path = process.argv[2]
const ext = process.argv[3]

fs.readdir(_path, (err, files) => {
    if (err) throw err

    const filtered = files.filter(file => {
        return path.extname(file) === `.${ext}`
    })

    filtered.forEach(file => console.log(file))
})

// Solucion oficial

// var fs = require('fs')
// var path = require('path')

// var folder = process.argv[2]
// var ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })