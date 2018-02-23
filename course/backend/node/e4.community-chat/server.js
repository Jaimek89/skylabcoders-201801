import { Socket } from 'dgram';

const net = require ('net')

const server = net.createServer(Socket => {
    socket.on('data', data => console.log(data.toString()))
})

const port = process.argv[2]

server.listen(port, () => console.log(`chat server running on port ${port}`))