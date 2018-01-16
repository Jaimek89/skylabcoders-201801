Strings

//a) Puedes contar cuantas letras tiene tu nombre?
function showLetters(name){
console.log('My name has ' + name.length + ' letters') 
}
showLetters("Jaime")
// My Name has 4 letters 

//b) Añade tu apellido e indica en que posición se encuentra
function showLetters(name){
	var position = name.indexOf(" ")+1
console.log("Your first last name starts on position " +
   (position))
}
showLetters("Jaime Rocafull")
// Your first last name starts on position 5

//c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre.
function showLetters(name){
console.log("My name is " +
   (name.substring(0, name.indexOf(" "))))
}
showLetters("Jaime Rocafull")
// My Name is Tony 

//d) Ahora, solo tu apellido.
function showLetters(name){
	var position = name.indexOf(" ")+1
console.log("My lastname is " +
   (name.substring(position,name.length)))
}
showLetters("Jaime Rocafull")
// My lastname is Stark

//d1) Iguala el resultado a una variable nueva e imprímela por pantalla.
function showLetters(name){
	var position = name.indexOf(" ")+1
	var lastName = name.substring(position,name.length)
console.log(name +", " + lastName)
}
showLetters("Jaime Rocafull")
//console.log(myFirstString +", " + myNewString) // Tony Stark, Stark

//e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.
function showLetters(name){
	var position = name.indexOf(" ")+1
	var lastName = (name.substring(position,name.length))
console.log('Hello, ' + name)
}
showLetters("Mr. Rocafull")
//console.log(myNewString) // Hello, Mr. Stark 

//f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS.
function showLetters(name){
	var position = name.indexOf(" ")+1
	var capitalLetters = (name.substring(position,name.length))
console.log(capitalLetters.toUpperCase())
}
showLetters("Jaime Rocafull")
//console.log(mySelection) // my lastname is STARK

//g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.

function showLetters(name){
	var something = name + ' scores every match'
console.log(something) 
}
showLetters("Jaime")
//var something = myFirstString + "is awesome"
//console.log(something) \\ "Tony is awesome"

//h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?

function showLetters(name){
	var position = name.indexOf(" ")+1
	var lastName = name.substring(position,name.length)
	var myFirstLastnameLetters = name.charAt(0) + '.' + lastName.charAt(0)
console.log(myFirstLastnameLetters)
}
showLetters("Jaime Rocafull")
//console.log(myFirstLastnameLetters) // S.Y










Arrays

//a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"

function showLetters(name){
	var myName = name.join("/")
console.log(myName)
}
showLetters(['J', 'A', 'I', 'M', 'E', 'R', 'O', 'C', 'A', 'F', 'U', 'L', 'L'])
//console.log(myName) // T/O/N/Y/S/T/A/R/K

//b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"

var myName = ['J', 'A', 'I', 'M', 'E', 'R', 'O', 'C', 'A', 'F', 'U', 'L', 'L'];
var removed = myName.splice(0, 5);
var myLastName = myName.join('|')
console.log(myLastName)
//console.log(myName) // S|T|A|R|K

//c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)

var myName = ['J', 'A', 'I', 'M', 'E', 'R', 'O', 'C', 'A', 'F', 'U', 'L', 'L'];
var removes = myName.splice(5, 8)
for (var i=0;i<myName.length;i++){
	console.log((i+1) + 'º' + myName[i])
}
//console.log(myName) // 1º T, 2º O, 3º N, 4º Y
Resource: https://www.w3schools.com/jsref/jsref_split.asp

//d)Como en el ejercicio anterior, pero seleccionando tu apellido

var myName = ['J', 'A', 'I', 'M', 'E', 'R', 'O', 'C', 'A', 'F', 'U', 'L', 'L'];
var removes = myName.splice(0, 5)
for (var i=0;i<myName.length;i++){
	console.log((i+6) + 'º' + myName[i])
}
//console.log(myLastName) // 5º S, 6º T, 7º A, 8º R, 9º K
Resource: https://www.w3schools.com/jsref/jsref_length_array.asp

//e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings

var myName = ['Jaime', 'Rocafull']
var myFirstName = myName [0]
var myLastName = myName [1]
console.log(myFirstName.charAt(0) + '.' + myLastName.charAt(0))
//console.log(myInitials) // T.S

//f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.
 
var myName = ['Jaime', 'Rocafull', 28]
var mySelector = ("My name is " + myName[0] + ' and i\'m ' + myName[2] + ' years old')
console.log(mySelector)
//console.log(mySelector) // My name is TONY and i'm 40 years old

//g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.

function showLetters(name){
	var city = 'Valencia'
	var myCityAdd = name.concat(city)
console.log('City added to array! => ' + myCityAdd)
}
showLetters(['Jaime','Rocafull',28 ])
//console.log(myCityAdd) // City added to array! => Tony, Stark, 40, New York

//h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.

function showLetters(name){
	var city = 'Valencia'
	var myCityAdd = name.concat(city)
console.log('City added to array! => ' + myCityAdd)
var myCityDelete = name
console.log('City deleted! => ' + myCityDelete)
}
showLetters(['Jaime','Rocafull',28 ])
//myCityAdd() // City added to array! => Tony, Stark, 40, New York
//myCityDelete() // City deleted! => Tony, Stark, 40

//j) Ahora, elimina el nombre y asegura los cambios Resources: https://www.w3schools.com/jsref/jsref_shift.asp

function showLetters(name){
	name.shift()
	console.log(name)
}
showLetters(['Jaime','Rocafull',28 ])

//k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición? Resources: https://www.w3schools.com/jsref/jsref_splice.asp

function showLetters(name){
	name.shift()
	console.log(name)
	name.splice(0, 0, "Jaime");
	console.log(name)
}
showLetters(['Jaime','Rocafull',28 ])

//l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var multByTwo = numbers.map(function(x) {
   return x * 2;})
console.log(multByTwo)

//Solución con función----------------
function numbers(operation){
var multByTwo = operation.map(function(x) {
   return x * 2;})
console.log(multByTwo)
}
numbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
//numbers = [...]
//var multByTwo = numbers.map(...)

//l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.

function numbers(operation){
	num = 3
var arrayMult = operation.map(function(x) {
   return x * num;})
console.log(arrayMult)
}
numbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
//Resource: https://www.w3schools.com/jsref/jsref_map.asp

//m) Podrías mostrarlos en el orden inverso? Resources: https://www.w3schools.com/jsref/jsref_sort.asp

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var multByTwo = numbers.sort(function(a, b){return b-a});
console.log(multByTwo)

//Otra solución
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var multByTwo = numbers.reverse()
console.log(multByTwo)

//n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?

var myName = ['Jaime', 'Rocafull']
var name = myName.join(' ')
var minus = name.toLowerCase()
for(i=0; i<minus.length; i++){
	var letter = minus[i]
	var count = 0
	for(x=0;x<minus.length;x++){
		if(minus[x]===letter)
			count = count+1
	}
		if(count>1){
			var repeatLetters = (name + ', the letter ' + '\'' + letter + '\' => ' + count + ' times')
			console.log(repeatLetters)
		}
}
//console.log(repeatLetters) // Tony Stark, the letter 'T' => 2 times.

n1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras

var myName = ['Toni', 'Stark']
var name = myName.join(' ')
var minus = name.toLowerCase()
for(i=0; i<minus.length; i++){
	var letter = minus[i]
	var count = 0
	for(x=0;x<minus.length;x++){
		if(minus[x]===letter)
			count = count+1
		if(count=1){

				var repeatLetters = (name + ', the letters ==> ' + count + ' are not repeated, the name is ==> ' + name)
				console.log(repeatLetters)
		}
	}
}

//console.log(repeatLetters) Tony Stark, the letters => o, n, y, s, a, r, k are not repeated, the name is => Ony Sark













Numbers

//a) Que hora es? Declara la hora como número y devuelvela como String

//var time = new Date()
//console.log(time.toTimeString()) ------De esta forma podemos saber la hora exacta que es, o el dia o el mes o el año...------

var hora = 10.45
var string = hora.toString()
console.log('It\'s ' + fix + ' of morning')
//console.log(myString + myNumberStringify) // I'ts 10.45 of morning
//Hint => https://www.w3schools.com/jsref/jsref_tostring_number.asp

//b) Nono, que hora exactamente? Dime la hora sin minutos

var hora = 10.45
var fix = hora.toFixed(0)
console.log('It\'s around ' + fix + ' of morning')
//console.log(myString) // It's around 10 of morning

//c) Ahora, declara tu hora y muéstrala redondeada.

var hourWithMin = 10.34
var hour = Math.trunc(hourWithMin)
var min = (hourWithMin - hour)
if (min < 0.3) {
	console.log(hour)
}
else{
	console.log(hour + 1)
}
//console.log(...(10.34)) // 11!
//Hint => https://www.w3schools.com/jsref/jsref_round.asp

//d) Hagamos una calculadora. Primero, la suma.
//We can do a calculator, so let's do it! first, do a sum with two numbers

var num1 = 7
var num2 = 3
var sum = (num1 + num2)
console.log('The sum of ' + num1 + '+' + num2 + ' is = ' + sum)
//console.log(sum) //The sum of 7+3 is 10

//d1) Añade la resta...

var num1 = 7
var num2 = 3
var sum = (num1 + num2)
var rest = (num1 - num2)
console.log('The sum and rest ' + num1 + ' and ' + num2 + ' is = ' + sum + ' and ' + rest)
//console.log(sum + rest) // The sum and rest of 7 and 3 is 10 and 4 

//d2) Y la multiplicación

var num1 = 7
var num2 = 3
var sum = (num1 + num2)
var rest = (num1 - num2)
var mult = (num1 * num2)
console.log(sum + ', ' + rest + ' and ' + mult)
//console.log(sum + rest + mult) // 10, 4 and 21

//d3) Por ultimo, la división

var num1 = 7
var num2 = 3
var sum = (num1 + num2)
var rest = (num1 - num2)
var mult = (num1 * num2)
var div = (num1 / num2).toFixed(1)
console.log(sum + ', ' + rest + ', ' + mult + ' and ' + div)
//console.log(sum + rest + mult + div) // 10, 4, 21 and 2.3

//d4) Ahora, intenta multiplicar un número por una string, que devuelve?

console.log(10*'hour') //------------->NaN
//console.log(10*"hour") // ....?!

//e) Podemos controlar este error con un condicional if?

var num1 = 'J'
var num2 = 8
var mult = (num1 * num2)
if (isNaN(mult)){
	console.log('You can\'t do this operation!')
}
else {
	console.log(mult)
}
//console.log(10*"hour") // You can't do this operation!