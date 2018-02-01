//Hangman game

class Hangman {
    constructor(word, attempts) { //function Hangman(word, attempts) {
        const arrWord = word.toUpperCase().split("") //var to let    Declarar word = this.__word y attempts = this.__attempts
        const arr_Word = new Array(word.length) //var to let
        arr_Word.fill('_')
        this.attempts = attempts
        this.try = (charOrWord) => { //this.try = function (charOrWord) {
            let message = "" //var to let
            if (attempts > 0 && arr_Word.indexOf("_") >= 0) {
                try {   //Try-catch, nos devuelve un mensaje cuando encuentra un error, en este caso, al pasarle un numérico, nos dará este error.
                    if (charOrWord.match(/\W/) === null) {
                        if (charOrWord.length > 1) {
                            (word.toUpperCase() === charOrWord.toUpperCase())
                                ? message = 'You have guessed the word, well done!' : message = 'Sorry, you have not guessed... the correct word is ' + word.toUpperCase() + '.'
                            attempts = 0
                        } else {
                            let exist = false //var to let
                            for (let i = 0; i < arrWord.length; i++) {//var to let
                                if (charOrWord.toUpperCase() === arrWord[i]) {
                                    arr_Word[i] = arrWord[i];
                                    exist = true;
                                }
                            }
                            (exist === true) ? attempts : --attempts;
                            message = attempts + " " + arr_Word.join(' ')
                            if (arr_Word.indexOf('_') < 0) console.log('You have guessed the word, well done!')
                        }
                    } else {
                        message = 'Please, enter a valid character or word!'
                        --attempts
                    }
                } catch (error) {
                    console.log('Error: ' + error.message)
                    message = 'Please, enter a valid character or word!'
                }
            } else {
                message = "GAME OVER."
            }
            return message
        }
    }
}
let game = new Hangman('hello', 10) //var to let

//game.try('e')
//game.try('a')
//game.try('hello')

class Hangman {
    constructor(word, attempts) { //function Hangman(word, attempts) {
        const arrWord = word.toUpperCase().split(""); //var to let    Declarar word = this.__word y attempts = this.__attempts
        const arr_Word = new Array(word.length); //var to let
        arr_Word.fill('_');
        this.attempts = attempts;
    }

    this.try = (charOrWord) => { //this.try = function (charOrWord) {
    let message = "";//var to let
    if (attempts > 0 && arr_Word.indexOf("_") >= 0) {
        try {   //Try-catch, nos devuelve un mensaje cuando encuentra un error, en este caso, al pasarle un numérico, nos dará este error.
            if (charOrWord.match(/\W/) === null) {
                if (charOrWord.length > 1) {
                    (word.toUpperCase() === charOrWord.toUpperCase())
                        ? message = 'You have guessed the word, well done!' : message = 'Sorry, you have not guessed... the correct word is ' + word.toUpperCase() + '.';
                    attempts = 0;
                } else {
                    let exist = false;//var to let
                    for (let i = 0; i < arrWord.length; i++) {//var to let
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
let game = new Hangman('hello', 10) //var to let