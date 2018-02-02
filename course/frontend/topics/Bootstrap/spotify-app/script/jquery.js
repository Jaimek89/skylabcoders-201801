$(document).ready(function () {

    const token = 'BQDshn1KJHh5zKgZUegJWhOEM5UmOaZUY6ohB1g036OIoFob8HP8_havZPeUJT45otoLRdZfLd7tuaiIieY-hgsVatw-Vep8XSODfThg9G_rVrgaJpCIot04N1Rk-77xL6cIACvT'

    $('#button').on('click', function (e) {
        e.preventDefault()
        $('.list-group1').show()
        let query = $('#text').val()
        $('form').trigger('reset')

        $.ajax({

            url: 'https://api.spotify.com/v1/search?q=' + query + '&type=artist',
            headers: {"Authorization": "Bearer "+ token },
            success: function (singer) {

                console.log(singer)
                $('.list-group1').empty()
                $('.list-group2').empty()
                $('.list-group3').empty()
                singer.artists.items.forEach(function (artist) {
                    $('.list-group1').append('<li class="list-group-item list-group-item-action href="#" value="' + artist.id + '">' + artist.name + '</li>')
    
                })
            }
        })
    })

    $('.list-group1').on('click', 'li', function (e) {
        e.preventDefault()
        $('.list-group1').hide()
        $('.list-group2').show()
        let idToSearch = $(this).attr('value')
            
        $.ajax({
            url: 'https://api.spotify.com/v1/artists/' + idToSearch + '/albums',
            headers: {"Authorization": "Bearer "+ token },
            success: function (album) {

                console.log(album)
                $('.list-group2').empty()
                album.items.forEach(function (selectedAlbum) {
                    $('.list-group2').append('<li class="list-group-item list-group-item-action href="#" value="' + selectedAlbum.id + '">' + selectedAlbum.name + '</li>')

                })
            }
        })
    })

    $('.list-group2').on('click', 'li', function (e) {
        e.preventDefault()
        $('.list-group2').hide()
        $('.list-group3').show()
        let songToSearch = $(this).attr('value')
            
        $.ajax({
            url: 'https://api.spotify.com/v1/albums/' + songToSearch,
            headers: {"Authorization": "Bearer "+ token },
            success: function (song) {
                
                console.log(song)
                $('.list-group3').empty()
                song.tracks.items.forEach(function (selectedSong) {
                    
                    $('.list-group3').append('<li class="list-group-item list-group-item-action href="#" data-toggle="modal" data-target="#exampleModal" value="' + selectedSong.id + '">' + selectedSong.name + '</li>')

                })
            }
        })
    })

    $('.list-group3').on('click', 'li', function (e) {
        e.preventDefault();

        var trackToSearch = $(this).attr('value');

        $.ajax({
            url: 'https://api.spotify.com/v1/tracks/' + trackToSearch,
            headers: {"Authorization": "Bearer "+ token },
            success: function (play) {

                $('.modal-body').empty()
                $('#exampleModalLabel').text(play.name)
                $('.modal-body').append('<audio controls><source src="' + play.preview_url +'" type="audio/mpeg"/></audio>')

            }
        })

    })

})