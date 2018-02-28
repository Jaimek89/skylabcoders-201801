require('dotenv').config()

// const axios = require('axios')
const express = require ('express')
const app = express()
const apiCall = require ('./axios.js')

const bodyParser = require ('body-parser')
const formBodyParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'pug')

app.get('/', (req, res) => {

    apiCall.list()
    .then(data => res.render('form', {tasks: data}))
    // .then(obj => res.render('form', {tasks: obj.data}))
})

app.post('/add', formBodyParser, (req, res) => {
    const {text} = req.body

    apiCall.create(text)
    res.redirect('/')
})

app.get('/done/:id', (req, res) => {
    const { id } = req.params

    apiCall.update(id)
    res.redirect('/')
})

app.get('/delete/:id', (req, res) => {
    const { id } = req.params

    apiCall.delete(id)
    res.redirect('/')
})

const port = process.env.PORT

app.listen(port, () => console.log(`PUG running on port ${port}`))