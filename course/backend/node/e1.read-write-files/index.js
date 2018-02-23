const fs = require ('fs')

const fileOrigin = process.argv[2]
const fileDestiny = process.argv[3]

// Leemos el archivo con la ruta que le hemos proporcionado
let buf = fs.readFileSync(fileOrigin)

let str = buf.toString()

fs.writeFile(fileDestiny, str)