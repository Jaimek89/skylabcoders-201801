const jwt = require ('jsonwebtoken')

const theSecret = 'a secret phrase'

const token = jwt.sign({ message: 'Hello, world!'}, theSecret, { expiresIn: 1 })

console.log(token)

setTimeout(() => {
    const payload = jwt.verify(token, theSecret)

    console.log(payload)

}, 500)



