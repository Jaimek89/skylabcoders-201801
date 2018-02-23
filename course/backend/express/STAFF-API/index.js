require('dotenv').config()
const _ = require ('lodash')

const dataPath = process.env.DATA_PATH

const staff = require(dataPath)

// const staff = require ('./data/staff.json')

const express = require ('express')

const app = express()

app.get('/api/staff', (req, res) => {
    const query = req.query.q || req.query.query

    if (query) {
        
        const results = staff.filter(person => {
            return person.name.includes(query) || person.surname.includes(query) || person.email.includes(query)
        })
        res.send(results)
    }else
        res.send(staff)
})

app.get('/api/staff/shuffle', (req, res) => res.json(_.shuffle(staff)))

const port = process.env.PORT

app.listen(port, () => console.log(`staff api running on port ${port}`))