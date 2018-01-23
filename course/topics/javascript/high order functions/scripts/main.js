//## map

//Write a high order function that take the array of months and create a new array that contains the same months but with the first letter in upper case.

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']
function upperMonth(){
    var upperLetter = months.map(function(x){
        return x.slice(0,1).toLocaleUpperCase()
    })
}
upperMonth()

var month = 'january'
var letter = month.slice(0,1)
console.log(letter)
var result = letter.toLocaleUpperCase()
console.log(result)


//## filter

//Write a high order function that take the array of months and create a new array that contains only the months that begin with j.

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']

//## reduce

//Write a high order function that counts all the vowels of the following text.

var countVowels;
(function(){
    var regex = /[aáeéiíoóuú\+]+/g

    countVowels = function(text){
        return text.split('').reduce(function(vowelsCount, letter){

            if (letter.toLowerCase().match(regex)){
                return vowelsCount += 1
            }

            return vowelsCount
        },0)
    }
})();

console.log('should countVowels("hello world") result 3', countVowels('hello world'));
console.log('should countVowels("el camión blanco de jorge") result 9', countVowels('el camión blanco de jorge'));

var loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'

//## every & some

//Write a high order function that returns true if all months have five letters or more, and if some month has five letters or more.

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']

//## Callback

//Write a callback function that receives an age and a callback function, if age is equal or great than 18, call the callback function to allow enter in a bar, if hasn't 18 the entrance is not allowed.

function accesBar(age, callback){
    age>=18 ? callback(true) : callback(false);
}
function advisor(allowed){
    console.log(allowed? 'the entrance is allowed' : 'the entrance is not allowed');
}
accesBar(8,advisor);
