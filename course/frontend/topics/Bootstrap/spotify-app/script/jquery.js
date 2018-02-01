$(document).ready(function () {

    $('#button').on('click', function (e) {
        e.preventDefault();
        $('.list-group1').show();
        var query = $('#text').val();
        $('form').trigger('reset');

        $.ajax({

            url: 'https://api.spotify.com/v1/search?q=' + query + '&type=artist',
            headers: {"Authorization": "Bearer BQDlyqDdjB7VyyRNpOjW1mG444iIWYZzk62yINFc4Z5dXcNPgy3m0S5XCCv31-oQYShzvP4PHGYiYIvOmPsh-xjwYkOvSZ3_n_2h6VDWeGx-X6JYBKdHtl_njJUySrXqDVm8m3K4"},
            success: function (singer) {

                singer.artists.items.forEach(function (artist) {
                    $('.list-group1').append('<li class="list-group-item"><a href="#" data="' + artist.id + '">' + artist.name + '</a></li>');

                });
            }
        });
    });

    $('.list-group1').on('click', function (e) {
        $('.list-group1').hide()
    })

});