const http = require('http')

const url = process.argv[2]

http.get(url, res => {
  res.setEncoding('utf-8')

  let rawData = ''

  res.on('data', chunk => rawData += chunk)

  res.on('end', () => {
    console.log(rawData.length)
    console.log(rawData)
  }) 

  res.on('error', console.error)
})

// Solucion oficial

// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })