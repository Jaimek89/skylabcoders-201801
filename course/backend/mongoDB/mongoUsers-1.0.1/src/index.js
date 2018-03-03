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

    let _id = ''

    app.get('/', (req, res) => {
        const { filter } = req.query
        let filterObject = {}
        if (filter) filterObject.name = filter

        db.collection('form').find(filterObject).toArray((err, data) => {
            
            res.render('form', {data, _id})
        })
    })

    app.post('/add', formBodyParser, (req, res) => {

        const { name, surname, email, username, password } = req.body

        db.collection('form').insert({ name, surname, email, username, password }).then(res.redirect('/'))
    })

    app.get('/show/:id', (req, res) => {
        const { id } = req.params

        if (id == _id){
            _id = ''
        }else{
            _id = id
        }
        res.redirect('/')
    })

    app.post('/update/', formBodyParser, (req, res) => {
        const { id, name, surname, email, username } = req.body

        db.collection('form').updateOne({_id:ObjectId(id)}, {$set:{ name, surname, email, username }}).then(res.redirect('/'))
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



