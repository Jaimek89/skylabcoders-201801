require('dotenv').config()

const express = require ('express')
const app = express()

const bodyParser = require ('body-parser')

const tasks = []

const jsonBodyParser = bodyParser.json()

//Create a new task. Error in case an Input is missing. Error in case an Id already exists

app.post('/api/tasks', jsonBodyParser, (req, res) => {
    const { id, text, done } = req.body

    if(!id || !text || !done) return res.json(ko('Task registration failed', 'Input missing'))

    const alreadyExists = tasks.some(task => task.id === id)

    if(alreadyExists) return res.json(ko('Task registration failed', 'Id already exists'))
const item = {
    id: id,
    text: text,
    done: done

}
//{ id, text, done}
    tasks.push(item)

    res.json(ok('Task registration succeded'))
})

//Retrieve all tasks

app.get('/api/tasks', (req, res) => res.json(ok('Tasks listing succeded', tasks.map(({ task }) => ({ task })))))

//Retrieve a task by id

//Function message, in case everuthing goes well

function ok(message, data) {
    const res = { status: 'OK', message }

    if (data) res.data = data

    return res
}

//Function message, in case something goes wrong

function ko(message, error) {
    const res = { status: 'KO', message }

    if (error) res.error = error

    return res
}

const port = process.env.PORT

app.listen(port, () => console.log(`Users API running on port ${port}`))