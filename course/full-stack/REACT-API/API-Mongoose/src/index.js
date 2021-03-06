require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const uuid = require('uuid/v4')
const { success, fail, validate } = require('./api-utils')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./model/userModel')

const host = process.env.MONGO_HOST
const port = process.env.MONGO_PORT
const database = process.env.MONGO_DB
const collection = process.env.MONGO_COL

mongoose.connect(`mongodb://${host}:${port}/${database}`)
    .then(() => { // if all is ok we will be here

         
        const app = express()

        app.use(cors())

        app.get('/api/users', (req, res) => {
            User.find({}, { _id: 0, password:0, __v:0 }, (err, users) => {
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

                    return User.findOne({ username })
                })
                .then(user => {

                    if (user) throw Error('username already exists')

                    const id = uuid()

                    return User.create({ id, name, surname, email, username, password }).then(() => id)

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

                    return User.findOne({ username: newUsername })
                })
                .then(user => {
                    if (user) throw Error('username already exists')

                    return User.findOne({ id })
                })
                .then(user => {
                    if (user.username !== username || user.password !== password) throw Error('username and/or password wrong')

                    return User.findOneAndUpdate({ id }, { name, surname, email, username: newUsername, password: newPassword })
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

                    return User.findOne({ username })
                })
                .then(user => {
                    if (!user) throw Error('user does not exist')

                    if (user.id !== id) throw Error('user id does not match the one provided')

                    if (user.username !== username || user.password !== password) throw Error('username and/or password wrong')

                    return User.deleteOne({ id })
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

                    return User.findOne({ id }, { _id: 0, password: 0 })
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
    .catch(err => { // if error we will be here
        console.error('App starting error:', err.stack);
        process.exit(1);
    });

