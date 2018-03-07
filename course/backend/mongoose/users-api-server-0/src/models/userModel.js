const mongoose = require('mongoose')
require('dotenv').config()

const Users = mongoose.model('user', { id: String ,name: String, surname: String, email: String, username: String,  password: String  })

module.exports = Users 