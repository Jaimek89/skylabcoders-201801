require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const uuid = require('uuid/v4')
const { success, fail , validate } = require('./api-utils')
const Users = require('./models/userModel.js')

const host = process.env.MONGO_HOST
const port = process.env.MONGO_PORT
const database = process.env.MONGO_DB
const collection = process.env.MONGO_COL

const mongoose = require('mongoose');
mongoose.connect(`mongodb://${host}:${port}/${database}`);

const app = express()
// const Users = mongoose.model('user', { id: String ,name: String, surname: String, email: String, username: String,  password: String  })

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', function() {

    app.get('/api/users', (req, res) => {
        Users.find(({}), { _id: 0, password: 0, __v: 0 }, (err, users) => {
        if (err) return res.json(fail(err))

        res.json(success(users))
        })
    })

    const jsonBodyParser = bodyParser.json()

    app.post('/api/user', jsonBodyParser, (req, res) => {
        const { body: { name, surname, email, username, password } } = req

        Promise.resolve()
            .then(() => {
                validate({ name, surname, email, username, password })

                return Users.findOne({ username })
            })
            .then(user => {
                if (user) throw Error('username already exists')

                const id = uuid()

                const newUser = Users.create({ id, name, surname, email, username, password })
                .then(() => id)
            })
            .then(id => {
                res.json(success({ id }))
            })
            .catch(err => {
                res.json(fail(err.message))
            })
    })

    app.put('/api/user/:id', jsonBodyParser, (req, res) => {
        const { body: { name, surname, email, username, password, newUsername, newPassword } } = req
        const { params: { id } } = req
    
        Promise.resolve()
            .then(() => {
                validate({ id, name, surname, email, username, password, newUsername, newPassword })
    
                return Users.findOne({ username: newUsername })
            })
            .then(user => {
                if (user) throw Error('username already exists')
    
                return Users.findOne({ id })
            })
            .then(user => {
                if (user.username !== username || user.password !== password) throw Error('username and/or password wrong')
    
                return Users.updateOne({ id }, { name, surname, email, username: newUsername, password: newPassword })
            })
            .then(() => {
                res.json(success())
            })
            .catch(err => {
                res.json(fail(err.message))
            })
    })

    app.delete('/api/user/:id', jsonBodyParser, (req, res) => {
        const { body: { username, password } } = req
        const { params: { id } } = req
    
        Promise.resolve()
            .then(() => {
                validate({ id, username, password })
    
                return Users.findOne({ username })
            })
            .then(user => {
                if (!user) throw Error('user does not exist')
    
                if (user.id !== id) throw Error('user id does not match the one provided')
    
                if (user.username !== username || user.password !== password) throw Error('username and/or password wrong')
   
                return Users.deleteOne({ id })
            })
            .then(() => {
                res.json(success())
            })
            .catch(err => {
                res.json(fail(err.message))
            })
    })
    
    
    app.get('/api/user/:id', (req, res) => {
        const { params: { id } } = req

        Promise.resolve()
            .then(() => {
                validate({ id })

                return Users.findOne({ id },{ _id: 0, password: 0, __v: 0 })
            })
            .then(user => {
                if (!user) throw Error('user does not exist')

                res.json(success(user))
            })
            .catch(err => {
                res.json(fail(err.message))
            })
    })

    const port = process.env.PORT

    app.listen(port, () => console.log(`users api running on port ${port}`))

})