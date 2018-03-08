require('dotenv').config()

const api = require('../src')
const assert = require('assert')

const { API_PROTOCOL, API_HOST, API_PORT } = process.env

api.protocol = API_PROTOCOL
api.host = API_HOST
api.port = API_PORT

describe('api', () => {

    before(() => {

    })

    it('should list', done => {
        api.list()
            .then(res => {
                assert.equal(res.status, 'OK', 'results should be OK')

                assert(res.data && res.data.length > 0, 'should return data array')

                done()
            })
            .catch(done)
    })

    it('should create', done => {
        api.create('n', 's', 'e', 'u', 'p')
            .then(res => {
                assert.equal(res.status, 'OK', 'results should be OK')

                assert(res.data && res.data.id, 'should return data id')

                done()
            })
            .catch(done)
    })

    it('should update', done => {
        api.create('n1', 's1', 'e1', 'u1', 'p1')
            .then(res => api.update(res.data.id, 'n2', 's2', 'e2', 'u1', 'u2', 'p1', 'p1')
                .then(res => {
                    assert.equal(res.status, 'OK', 'results should be OK')

                    done()
                }))
            .catch(done)
    })

    it('should delete', done => {
        api.create('n3', 's3', 'e3', 'u3', 'p3')
            .then(res => api.remove(res.data.id, 'u3', 'p3')
                .then(res => {
                    assert.equal(res.status, 'OK', 'results should be OK')

                    done()
                }))
            .catch(done)
    })

    it('should retrieve', done => {
        api.create('n4', 's4', 'e4', 'u4', 'p4')
            .then(res => api.retrieve(res.data.id)
                .then(res => {
                    assert.equal(res.status, 'OK', 'results should be OK')

                    const user = res.data

                    assert(user, 'should return data user')
                    assert.equal(user.name, 'n4')
                    assert.equal(user.surname, 's4')
                    assert.equal(user.email, 'e4')
                    assert.equal(user.username, 'u4')

                    done()
                }))
            .catch(done)
    })
})