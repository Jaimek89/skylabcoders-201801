const mongoose = require('mongoose')

    const User = mongoose.model('user', { id: String, name: String, surname: String, email: String, username: String, password: String });

module.exports = User