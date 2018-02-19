const fs = require ('fs')
const path = require ('path')

module.exports = function(_path, ext, callback) {
    fs.readdir(_path, (error, files) => {
        if (err) throw err

        const filtered = files.filter(file => {
            return path.extname(file) === `.${ext}`
        })

        callback(filtered)
    })
}

module.exports = index6a.js

//export default index6a.js