const http = require ('http')
const url = require ('url')

const server = http.createServer(( req, res ) => {
    const _url = url.parse(req.url, true)
    let data, date

    switch (_url.pathname) {
        case '/api/parsetime':
                date = new Date(_url.query.iso)
                data = {
                    hour: date.getHours(),
                    minute: date.getMinutes(),
                    second: date.getSeconds()
                }
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(data))
        break
        
    case '/api/unixtime':
            date = new Date (_url.query.iso)
            data = {
                unixtime: date.getTime()
            }
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(data))
        break

    default:
        res.writeHead(405)
        res.end('hello! i cannot process that request... sorry :(')
    }
})

const port = process.argv[2]

server.listen( port, () => console.log(`http json api server running on port ${port}`))

// Solucion oficial

// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime: time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time)
//   } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time)
//   }

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))