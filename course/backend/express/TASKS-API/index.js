/**
 * @version 1.0.0
 * 
 * First aplication withouth error handler
 */

require('dotenv').config()

const express = require ('express')
const app = express()
const bodyParser = require ('body-parser')

const taskslist = []
const jsonBodyParser = bodyParser.json()

//List all tasks
app.get('/api/tasks', (req, res) => {
    res.json(taskslist)
})

//Create a task
app.post('/api/tasks', jsonBodyParser, (req, res) => {
    const { text } = req.body

    taskslist.push({ id: new Date().getTime().toString(), text, done: false})

    res.json('Task registration succeeded')
})

//Mark a task as done
app.put('/api/tasks/:id', (req, res) => {
    const { id } = req.params

    const task = taskslist.find(task => task.id === id )
    task.done = true

    res.json('Task update succeeded')
})

//Delete a task
app.delete('/api/tasks/:id', (req, res) => {
    const { id } = req.params

    const index = taskslist.findIndex(task => task.id === id )
    taskslist.splice(index,1)

    res.json('Task delete succeeded')
})

//Get all done tasks
app.get('/api/tasks/done', (req, res) => {
    const done = taskslist.filter(task => task.done === true)

    res.json(done)
})

//Get all todo tasks
app.get('/api/tasks/todo', (req, res) => {
    const todo = taskslist.filter(task => task.done === false)

    res.json(todo)
})

//Delete all tasks
app.delete('/api/tasks', (req, res) => {
    taskslist.splice(0)

    res.json('Tasks delete succeeded')
})

//Update task
app.patch('/api/tasks/:id', jsonBodyParser, (req, res) => {
    const { id } = req.params
    const { text } = req.body

    const task = taskslist.find(task => task.id === id )
    task.text = text

    res.json('Task update succeeded')
})

const port = process.env.PORT

app.listen(port, () => console.log(`Users API running on port ${port}`))