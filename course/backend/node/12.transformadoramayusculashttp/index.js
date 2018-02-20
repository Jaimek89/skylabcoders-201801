const http = require ('http')
const map = require ('through2-map')

const server = http.createServer((req, res) => {
    if (req.method === 'POST')
        req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res)
})

const port = process.argv[2]

server.listen(port, () => console.log(`http uppercaserer running on port ${port}`))

// $ curl -X POST --upload-file <file-path> http://localhost:8000

//Respuesta oficial

// var http = require('http')
// var map = require('through2-map')

// var server = http.createServer(function (req, res) {
//   if (req.method !== 'POST') {
//     return res.end('send me a POST\n')
//   }

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]))