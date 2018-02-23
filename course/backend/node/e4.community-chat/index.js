var net = require ('net')

var client = new net.Socket()
client.connect(3000, '192.168.0.16', () => {
    client.write('こんにちは世界')
})

client.on('data', data => console.log(data.toString()))