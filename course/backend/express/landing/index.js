const express = require ('express')
const moment = require ('moment')
const bodyParser = require('body-parser')

const app = express()

app.get('/', (req,res) => res.send('Hello, GET Jaime again!'))

app.post('/', (req,res) => res.send('Hello, POST!'))

app.put('/', (req,res) => res.send('Hello, PUT!'))

app.get('/api/parsetime', (req, res) => {
    const date = moment.utc(req.query.iso)
    const data = {
        hour: date.hours(),
        minute: date.minutes(),
        second: date.seconds()
    }
    /* Con Node:
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(data))
    */
    //Con Express
    res.json(data)
})

// const textBodyParser = bodyParser.text()

// app.post('/helloworld', textBodyParser, (req, res) => {
//     res.send(req.body)
// })

// const jsonBodyParser = bodyParser.json()

// app.post('/helloworld/json', jsonBodyParser, (req, res) => {
//     res.json(req.body)
// })

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/login', urlencodedParser, (req, res) => {
    res.send(`${req.body.username}:${req.body.password}`)
})

const port = process.argv[2]

app.listen(port, () => console.log(`landing server running on port ${port}`))