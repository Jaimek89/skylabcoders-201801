const fs = require ('fs')
const path = require ('path')

const _path = process.argv[2]
const ext = process.argv[3]

fs.readdir(_path, (error, files) => {
    if (err) throw err

    const filtered = files.filter(file => {
        return path.extname(file) === `.${ext}`
    })

    filtered.forEach(console.log)
})

// NO FUNCIONA Revisar