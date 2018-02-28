const axios = require('axios')
const baseUrl = 'http://localhost:5000/api'

const apiCall = {

    list(){
        return axios.get(`${baseUrl}/tasks`)
        .then(obj => obj.data)
    },

    create(text){
        axios.post(`${baseUrl}/tasks`, { text: text })
    },

    update(id){
        axios.put(`${baseUrl}/tasks/${id}`)
    },

    delete(id){
        axios.delete(`${baseUrl}/tasks/${id}`)
    }
}

module.exports = apiCall