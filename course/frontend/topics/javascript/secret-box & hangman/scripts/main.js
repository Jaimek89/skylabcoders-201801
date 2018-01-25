//Secret Box

function Box(secret, password) {
    this.getSecret = function (_password) {
        if (password === _password) return secret;
    }
    this.setSecret = function (_secret, _password) {
        if (password === _password);
        secret = _secret;
    }
    this.changePassword = function (newPassword, oldPassword) {
        if (password === oldPassword);
        password = newPassword;
    }
}

var box = new Box('You sorted out my secret', 'masterkey');

//box.getSecret('masterkey');

/*************************************************+*/


//Closures

function A() {
    var value = 1;

    this.setValue = function (v) { value = v }
    this.getValue = function () { return value }
}

var a = new A()

//a.getValue
//a.setValue(2)
//a.getValue()

/*************************************************+*/

//Hangman game

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

//game.try('e')
//game.try('a')
//game.try('hello')



