const rp = require('request-promise')

// TODO implement api client

const api = {
    _baseUrl() {
        with (this) {
            return `${protocol}://${host}:${port}/api`
        }
    },

    _call(method, path, body) {
        // return rp(`${this._baseUrl()}/${path}`)
        //     .then(res => JSON.parse(res))
        return rp({
            method,
            uri: `${this._baseUrl()}/${path}`,
            body,
            json: true
        })
    },

    list() {
        return this._call('get', 'users').then(res => res.data)
    },

    create(name, surname, email, username, password) {
        return this._call('post', 'user', { name, surname, email, username, password })
    },

    update(id, name, surname, email, username, newUsername, password, newPassword){
        return this._call('put', `user/${id}`, { name, surname, email, username, newUsername, password, newPassword})
    },

    remove(id,username,password){
        return this._call('delete', `user/${id}`, { username, password })
    },

    retrieve(id){
        return this._call('get', `user/${id}`)
    }
}

module.exports = api