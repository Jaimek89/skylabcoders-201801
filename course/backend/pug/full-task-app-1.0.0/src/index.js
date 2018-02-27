require('dotenv').config()

const axios = require('axios')
const express = require ('express')
const app = express()

const bodyParser = require ('body-parser')
const formBodyParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    axios.get('http://localhost:5000/api/tasks')
    .then(obj => res.render('form', {tasks: obj.data}))
})

app.post('/add', formBodyParser, (req, res) => {
    const {text} = req.body

    axios.post('http://localhost:5000/api/tasks', { text: text })
    res.redirect('/')
})

app.get('/done/:id', (req, res) => {
    const { id } = req.params

    axios.put(`http://localhost:5000/api/tasks/${id}`)
    res.redirect('/')
})

app.get('/delete/:id', (req, res) => {
    const { id } = req.params

    axios.delete(`http://localhost:5000/api/tasks/${id}`)
    res.redirect('/')
})

const port = process.env.PORT

app.listen(port, () => console.log(`PUG running on port ${port}`))