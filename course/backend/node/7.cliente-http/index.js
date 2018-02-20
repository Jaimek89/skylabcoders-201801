const http = require("http");

const url = process.argv[2]

http.get(url, res => {
    res.setEncoding('utf8')

    res.on('data', console.log)

    res.on('error', console.error)
})

// SOLUCION OFICIAL

// var http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)