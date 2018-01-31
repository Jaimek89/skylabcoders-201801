$(document).ready(function () {

    //Si pulsamos #button, mostramos una lista vacia(6), guardamos el valor de text en la variable query (7),
    //hacemos una llamada a ajax con la variable query(11) y mostramos sus resultados en diferentes li(15).
    $('#button').on('click', function (e) {
        e.preventDefault();
        $('.list-group1').show();
        var query = $('#text').val();
        $('form').trigger('reset');

        $.ajax({
            url: 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + query,
            success: function (beers) {

                beers.forEach(function (beer) {
                    $('.list-group1').append('<li class="list-group-item"><a href="#" data="' + beer.id + '">' + beer.name + '</a></li>');
                    console.log(beer)
                });
            }
        });
    });

    $('.list-group1').on('click', 'a', function (e) {
        e.preventDefault();

        var idToSearch = $(this).attr('data');

        $.ajax({
            url: 'https://quiet-inlet-67115.herokuapp.com/api/beer/8OucfG' + idToSearch,
            success: function (beer) {

                $('#exampleModalLabel').append(beer.name)
                $('.modal-body').append(beer.style.description)
                $('.modal-body').append('<img class="mx-auto d-block" src="' + beer.labels.icon + '">')

                $('.modal').show();
            }
        })

    })
});

//https://quiet-inlet-67115.herokuapp.com/api/beer/8OucfG