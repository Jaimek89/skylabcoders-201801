//Crear una API que permita registrar usuarios, debe dar error cuando el ususario ya se ha registrado. 
//status: ok|ko. message: user registered succesfull | user already registered
//actualizar(PUT) y eliminar un usuario(DELETE)

require('dotenv').config()
//const _ = require ('lodash')

const express = require ('express')
const app = express()
const bodyParser = require('body-parser')

const users = []

app.get('/api/users')


const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/api/users', urlencodedParser, (req, res) => {
    res.send(`${req.body.username}:${req.body.password}`)
})
    
const port = process.env.PORT

app.listen(port, () => console.log(`staff api running on port ${port}`))