const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  
    const stream = fs.createReadStream(file).pipe(res)
  
})

const port = process.argv[2]
const file = process.argv[3]

server.listen(port, () => console.log(`file server running on port ${port}`))

//Solucion oficial

// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))