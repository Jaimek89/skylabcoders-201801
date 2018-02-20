const net = require ('net')

function warrant2Digits(number) {
    return number < 10 ? '0' + number : number
}

const server = net.createServer(socket =>{
    const date = new Date

    const formattedDate = `${date.getFullYear()}-${warrant2Digits(date.getMonth()+1)}-${warrant2Digits(date.getDate())} ${warrant2Digits(date.getHours())}:${warrant2Digits(date.getMinutes())}\n`

    //socket.on('close', () => console.log('closing socket'))

    socket.end(formattedDate.toString())
})

const port = process.argv[2]

server.listen(port, () => console.log(`time server running on port ${port}`))

//solucion oficial

// var net = require('net')

// function zeroFill (i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))