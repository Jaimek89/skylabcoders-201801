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
    var arr = word.toLowerCase().split("");
    var arr1 = new Array(word.length);
    for (var i = 0; i < arr1.length; i++) {
        arr1[i] = "_";
    }
    this.attempts = attempts;

    this.try = function (letter) {
        if (attempts > 0 && arr1.indexOf("_") >= 0) {
            if (letter.length > 1) {
                (word.toLowerCase() === letter.toLowerCase()) ? console.log("Very Well,you Asserted") : console.log("Too Bad... You lose");
                attempts = 0;
            } else {
                var pos = arr.indexOf(letter.toLowerCase());
                (pos >= 0) ? arr1[pos] = arr[pos] : --attempts;
                console.log(attempts + "     " + arr1.join(' '));
                    if (arr1.indexOf('_') < 0) console.log('You Win');
            }
        } else {
            console.log("Game Over");
        }
    }
}

var game = new Hangman('skylab', 10);

//game.try('e')
//game.try('a')
//game.try('hello')



