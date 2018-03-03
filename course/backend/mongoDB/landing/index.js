require ('dotenv').config()

const express = require ('express')
const { MongoClient } = require ('mongodb')

const app = express()

MongoClient.connect('mongodb://localhost:27017/bootcamp', (err,conn) => {
    if (err) throw err

    const db = conn.db('bootcamp')

    app.get('/', (req, res) => {
        const query = req.query.query || req.query.q || ''

        const regex = new RegExp(query, 'i')
        db.collection('staff').find({ name: regex }).toArray((err, data) => {
            if (err) throw err
    
            res.json(data)
    
            // database.close()
        })
    })

    const port = process.env.PORT

    app.listen(port, () => console.log(`server running on port ${port}`))

    process.on('SIGINT', () => {
        console.log('stoppging server')
        
        conn.close()

        process.exit()
    })
})

