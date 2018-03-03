require('dotenv').config()

const express = require ('express')
const { MongoClient, ObjectId } = require ('mongodb')

const app = express()

const bodyParser = require ('body-parser')
const formBodyParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'pug')

MongoClient.connect('mongodb://localhost:27017/bootcamp', (err, conn) => {
    if (err) throw err

    const db = conn.db('bootcamp')

    app.get('/', (req, res) => {
        db.collection('form').find().toArray((err, data) => {
            let { show } = req.query

            let updateData = data.map(user => {
                user.showForm = (user._id == show)
                return user
            })
            res.render('form', {updateData})
        })
    })

    app.post('/add', formBodyParser, (req, res) => {

        const { name, surname, email, username, password } = req.body

        db.collection('form').insert({ name, surname, email, username, password }).then(res.redirect('/'))
    })

    app.post('/update', formBodyParser, (req, res) => {
        const { id, name, surname, email, username } = req.body

        db.collection('form').updateOne({_id:ObjectId(id)}, {$set:{ name, surname, email, username }})
        (res.redirect('/'))
    })

    app.get('/delete/:id', (req, res) => {
        const { id } = req.params

        db.collection('form').remove({_id:ObjectId(id)}).then(res.redirect('/'))
    })

    app.get('/deleteAll', (req, res) => {
        db.collection('form').remove({}).then(res.redirect('/'))
    })

    const port = process.env.PORT

    app.listen(port, () => console.log(`PUG running on port ${port}`))

    process.on('SIGINT', () => {
        console.log('stoppging server')
        
        conn.close()

        process.exit()
    })
})



