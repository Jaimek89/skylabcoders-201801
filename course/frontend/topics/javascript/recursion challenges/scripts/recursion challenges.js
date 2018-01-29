//### counter-digit

//Write a recursive function to count the times that a digit its repeat in a number.

//input -> digitCount(2536228324, 2) output-> 2 its 4 times



//### remove-repeat-chars

//Write a recursive function that remove the repeat characters.

//input -> removeRepeatChars('aabcbcb') output -> abc



//### reverse-string

//Write a recursive function that reverse a string.

//input -> reverseString('hello') output-> olleh

// La funcion reverseString, se va ejecutando hello, ello, llo, lo, o, cuando se acaba el string, la función se deja de ejecutar y empieza a sumar los charAt, de forma que puede terminar la primera llamada a la función.

function reverseString(str){
    if (str === ''){
        return '';
    }else{
        return reverseString(str.slice(1)) + str.charAt(0);
    }
}

console.log(reverseString('hello'))

// Simplificada con ternarios

function reverseString(str){
    return str ? reverseString(str.slice(1)) + str.charAt(0) : '';
}

console.log(reverseString('hola'))
