require('dotenv').config()

const express = require ('express')
const app = express()

const bodyParser = require ('body-parser')

const formBodyParser = bodyParser.urlencoded({ extended: false })

const tasks = []

let counter = 1

// app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    const todo = tasks.filter(task => task.done === false)
    const done = tasks.filter(task => task.done === true)

    res.render('form', {tasks, todo, done})
})

app.post('/add', formBodyParser, (req, res) => {
    // let index
    // if(tasks.length === 0) {
    //     index = 1
    // } else {
    //     index = tasks[tasks.length-1].id +1
    // }

    //id: new Date().getTime() --Hint para crear id's automáticas--
    
    tasks.push({
        text: req.body.task,
        done: false,
        id: counter
    })
    counter++
    res.redirect('/')
})

app.get('/done/:id', (req, res) => {
    const id = req.params.id
    const task = tasks.find(task => task.id === parseInt(id))
    task.done = true
    res.redirect('/')
})

app.get('/delete/:id', (req, res) => {
    const id = req.params.id
    const indexTask = tasks.findIndex(task => task.id === parseInt(id))
    tasks.splice(indexTask,1)
    res.redirect('/')
})

const port = process.env.PORT

app.listen(port, () => console.log(`PUG running on port ${port}`))