$(document).ready(function () {
    var $div_play = $('.play');
    var $button_play = $('#button_play');
    var $div_word = $('.word')
    var $game_word = $('.game_word');
    var $button_word = $('#button_word');
    var $attempts = $('#number_list');
    var $div_game = $('.game');
    var $button_game = $('#button_game');
    var $game_tried = $('.game_tried');
    var $hidden_word = $('.hidden_word');
    var $final_word = $('.final_word');
    var $game_attempts = $('.game_attempts')
    var $end = '';
    var game;
    var attempts = 0;
    //Si pulsamos #button_play hacemos desaparecer .play y hacemos aparecer .word
    $button_play.on('click', function () {
        $div_play.css('display', 'none');
        $div_word.css('display', 'block');
    });
    //Si pulsamos #button_word hacemos desaparecer .word y hacemos aparecer .game
    $button_word.on('click', function (e) {
        e.preventDefault();
        var _word = $game_word.val();
        attempts = $attempts.val();
        $div_word.css('display', 'none');
        $div_game.css('display', 'block');
        game = new Hangman(_word);
    });
    //Si pulsamos #buton_game enviamos la letra para comprobar la palabra.
    $button_game.on('click', function (e) {
        e.preventDefault();
        $game_attempts.text('You have ' + attempts + ' attempts missing')
        var charOrWord = $game_tried.val();
        var result = game.try(charOrWord);
        $hidden_word.text(result);
        if ($end.length > 0) {
            $div_game.css('display', 'none');
            $div_play.css('display', 'block');
            $final_word.text($end);
            _word = "";
            attempts = 0;
            $('.game_word').val('')
            $attempts.text('');
        }
    });

    function Hangman(word) {
        var arrWord = word.toUpperCase().split("");
        var arr_Word = new Array(word.length);
        arr_Word.fill('_');
        this.try = function (charOrWord) {
            var message = "";
            if (attempts > 0 && arr_Word.indexOf("_") >= 0) {
                try {   //Try-catch, nos devuelve un mensaje cuando encuentra un error, en este caso, al pasarle un numérico, nos dará este error.
                    if (charOrWord.match(/\W/) === null) {
                        if (charOrWord.length > 1) {
                            (word.toUpperCase() === charOrWord.toUpperCase())
                                ? $end = 'You have guessed the word, well done!' : $end = 'Sorry, you have not guessed... the correct word was ' + word.toUpperCase() + '.';
                            attempts = 0;
                        } else {
                            var exist = false;
                            for (var i = 0; i < arrWord.length; i++) {
                                if (charOrWord.toUpperCase() === arrWord[i]) {
                                    arr_Word[i] = arrWord[i];
                                    exist = true;
                                }
                            }
                            (exist === true) ? attempts : --attempts;
                            message = attempts + " " + arr_Word.join(' ');
                            if (arr_Word.indexOf('_') < 0) $end = 'You have guessed the word, well done!';
                        }
                    } else {
                        message = 'Please, enter a valid character or word!';
                        --attempts;
                    }
                } catch (error) {
                    console.log('Error: ' + error.message)
                    message = 'Please, enter a valid character or word!';
                }
            } else {
                $end = "GAME OVER.";
            }
            return message;
        }
    }
});

/*
function Hangman(word, attempts) {
    var arrWord = word.toUpperCase().split("");
    var arr_Word = new Array(word.length);
    arr_Word.fill('_');
    this.attempts = attempts;
    this.try = function (charOrWord) {
        var message = "";
        if (attempts > 0 && arr_Word.indexOf("_") >= 0) {
            try {   //Try-catch, nos devuelve un mensaje cuando encuentra un error, en este caso, al pasarle un numérico, nos dará este error.
                if (charOrWord.match(/\W/) === null) {
                    if (charOrWord.length > 1) {
                        (word.toUpperCase() === charOrWord.toUpperCase())
                            ? message = 'You have guessed the word, well done!' : message = 'Sorry, you have not guessed... the correct word is ' + word.toUpperCase() + '.';
                        attempts = 0;
                    } else {
                        var exist = false;
                        for (var i = 0; i < arrWord.length; i++) {
                            if (charOrWord.toUpperCase() === arrWord[i]) {
                                arr_Word[i] = arrWord[i];
                                exist = true;
                            }
                        }
                        (exist === true) ? attempts : --attempts;
                        message = attempts + " " + arr_Word.join(' ');
                        if (arr_Word.indexOf('_') < 0) console.log('You have guessed the word, well done!');
                    }
                } else {
                    message = 'Please, enter a valid character or word!';
                    --attempts;
                }
            } catch (error) {
                console.log('Error: ' + error.message)
                message = 'Please, enter a valid character or word!';
            }
        } else {
            message = "GAME OVER.";
        }
        return message;
    }
}
var game = new Hangman('hello', 10)
*/