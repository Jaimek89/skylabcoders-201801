let api_client;

(function () {

    const axios = require('axios')
    const baseUrl = 'http://localhost:5000'

    api_client = {
        
        getList: function(){
            return axios.get(`${baseUrl}/api/users`).then(res => res.data.data)
        },

        createUser: function(){

        },

        updateUser: function(){

        },

        deleteUser: function(){

        },

        showUser: function(){
            
        }

    }
})()

export default api_client