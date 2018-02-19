/**
 * Api Spotify Client
 * 
 */

const spotifyApi = {
    url: "https://api.spotify.com/v1/",

    token: "BQAUMvcHnMc2GIulg2Fu0n47FbLgy1xVRH4DoX6XVP19nXTVeMvJ6e-f72R8lVentqEQIUvcvYd9tLgC8xv1bmkWRhhNi_PrA4OnyWwbrbfR-dnQdLe_SZXB_dCNyfYifvAi3U7r",

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
