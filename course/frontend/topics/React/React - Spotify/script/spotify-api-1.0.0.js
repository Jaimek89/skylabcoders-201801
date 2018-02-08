/**
 * Api Spotify Client
 * 
 */

const spotifyApi = {
    url: "https://api.spotify.com/v1/",

    token: "BQCXXVMmb22CC8n_TUG4u4t0NF9LtJXUx2XeBA8rnqn5NHiqK7KK7-oyBm1gs-mIcmGWkLRxQN7d-3cRrPGpPb5C-chfyUOypA2qN3QKO0_mmYem28SrZwOFNrVnriH9xNCy5jK5",

    getHeader: function () {
        return {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }
    },

    call: function (path) {
        return new Promise((resolve, reject) => {
            fetch(path, this.getHeader())
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => {
                    throw new Error(err)
                })
        })
    },

    getArtists: function (query) {
        const urlQuery = this.url + "search?q=" + query + '&type=artist';
        let artistsList = this.call(urlQuery).then(res => res.artists.items);
        console.log(artistsList)
        return artistsList;
    },

    getAlbums: function (idArtist) {
        const urlQuery = this.url + 'artists/' + idArtist;
        let albumsList = this.call(urlQuery).then(res => res.items);
        return albumsList;
    },

    getTracks: function (idAlbum) {
        const urlQuery = this.url + "albums/" + idAlbum + "/tracks"
        let tracksList = this.call(urlQuery).then(res => res.items);
        return tracksList;
    }


}
