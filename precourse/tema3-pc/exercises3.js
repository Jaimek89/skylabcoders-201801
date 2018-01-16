//a| Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.

function name(n){
    console.log('Hello ' + n)
}
name('Jaime')
/*function (myName){
    console.log('hello + myName')//output: 'hello myName'
}*/
--------------------------
//b) Intenta retornar los valores en lugar de usar console.log

function name(n){
    return 'Hello ' + n
}
name('Jaime')
/*function (myName){
    return 'hello + myName' // output: 'hello myName'
}*/
--------------------------
//c) Ahora, añade tu edad y concaténala al return

function name(n, a){
    return 'Hello ' + n + ', you\'re ' + a + ' years old.'
}
name('Jaime', 28)
/*return 'myMessage' //output: 'hello myName, you're myAge years old.'
Cual es la diferencia entre console.log() & return?

Read this => http://stackoverflow.com/questions/21020608/difference-between-console-log-and-return-in-javascript*/
--------------------------
//d) Iguala tu función a una variable y ejecútala

var myName = function name(n, a){
    return 'Hello ' + n + ', you\'re ' + a + ' years old.'
}
console.log(myName('Jaime', 28))
/*var MyFunction = ... //output: 'hello myName, you're myAge years old.'
myFunction()
=> Podemos guardar resultados de funciones en una variable, es decir, sus returns*/
--------------------------
//e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir sus dos resultados concatenados.

var myName = function (n){
    return 'Hello ' + n
}

var myAge = function (a){
    return ' you\'r ' + a + ' years old'
}

myName('Jaime') + myAge(28)
/*myName() + myAge() //output: IronMan 40*/
--------------------------
//e1) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.

var myName = function (n){
    return n + ' '
}

var myAge = function (a){
    return a + ' '
}
var myRandomNumber = Math.floor(Math.random() * (10 - 0) + 0)

myName('Jaime') + (myAge(28+ myRandomNumber))
/*myName() + (myAge() + myRandomNumber).toString()//output: IronMan 45*/
--------------------------
f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.

var myName = function (n){
    return n + ' '
}

var myAge = function (a){
    return a + ' '
}
var myRandomNumber = Math.floor(Math.random() * (10 - 0) + 0)

myName('Jaime') + (myAge(28+ myRandomNumber))
/*var...
var...
myName(param1) + myAge(param2) //output: IronMan 43*/

//g) Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función padre deberá ser la llamada a las funciones hijas

var fullDates = function (){
	return myName('Jaime') + myAge(28)
}

var myName = function (n){
    return 'Hello ' + n
}

var myAge = function (a){
    return ' you\'r ' + a + ' years old'
}

console.log (fullDates())

/*function ... (){
    var x = myName(param1)
    var y = myAge(param2)
    return x + y
} //output: IronMan 40*/

//h) Haz otra función hija que solo devuelva un número random, ese número random será el argumento que se pasará como parámetro a la función age()

var fullDates = function (){
	return myName('Jaime') + myAge(randomNumber())
}

var randomNumber = function (){
	return Math.floor(Math.random() * (10 - 0) + 0)
}

var myName = function (n){
    return 'Hello ' + n
}

var myAge = function (a){
    return ' you\'r ' + a + ' years old'
}

console.log (fullDates())
/*return x + y // output: IronMan 6457689
http://www.w3schools.com/jsref/jsref_random.asp*/

//i) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 20 y otro si es de 21 - 50

var fullDates = function (){
	return myName('Jaime') + ' ' + myAge(randomNumber)
}

var randomNumber = Math.floor(Math.random() * (50 - 0) + 0)
//Si llamo a randomNumber como funcion, no me funciona, si lo declario como variable, funciona perfectamente
var myName = function (n){
    return n
}

var myAge = function (a){
    return a 
}

if (randomNumber<20){
	console.log(fullDates() + ' You are to young to be Jaime')
}
else{
	console.log(fullDates() + ' OOOOOOH Jaime, you are getting old so bad!')
}
/*return x + y // output: IronMan 3...Sure you're Tony Stark?*/

//j) Al return de la función name(), concaténale otro mensaje

var fullDates = function (){
	return myName('Jaime') + ' ' + myAge(randomNumber)
}

var randomNumber = Math.floor(Math.random() * (50 - 0) + 0)

var myName = function (n){
    return n + ' aka The Boss'
}

var myAge = function (a){
    return a 
}

if (randomNumber<20){
	console.log(fullDates() + ' You are to young to be Jaime')
}
else{
	console.log(fullDates() + ' OOOOOOH Jaime, you are getting old so bad!')
}
/*return x + y // output: Tony Stark...aka IRONMAN, 34...Sure you're Tony Stark? */

//k) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable

var fullDates = function (){
	return 'The first function returns: ' + myName('Jaime') + ', ' + 'The second function returns: ' + myAge(randomNumber)
}

var randomNumber = Math.floor(Math.random() * (50 - 0) + 0)

var myName = function (n){
    return n + ' aka The Boss'
}

var myAge = function (a){
    return a 
}

if (randomNumber<20){
	console.log(fullDates() + ' You are to young to be Jaime')
}
else{
	console.log(fullDates() + ' OOOOOOH Jaime, you are getting old so bad!')
}
/*return x + y // output: The first function returns: 'Tony Stark...aka IRONMAN', The second function returns: '34...Sure you're Tony Stark?' */

//l) Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamada

var padre = function(){
	console.log('The first function returns: ' + x())
	if(x()==='Jaime'){
		console.log('The second function returns: ' + y())
			if (randomNumber<20){
	console.log('You are to young to be Jaime')
	}
	else{
	console.log('OOOOOOH Jaime, you are getting old so bad!')
	}
	}
	else{
		console.log('You\'re not JAIME!')
	}
}
var x = function(){
	return 'Jorge'
}
var y = function(){
	return randomNumber
}
var randomNumber = Math.floor(Math.random() * (50 - 0) + 0)
console.log(padre())
/*return x + y // output: "The first function returns: Hulk... You're not IRONMAN!"*/

//m) Vamos a complicarlo un poco... El número random debería generarse en otra función separada del padre. Retorna a la funcion padre y concaténalo en el return padre.

var padre = function(){
	console.log('The first function returns: ' + x())
	if(x()==='Jaime'){
	var randomAge = y()
	console.log('Random Age.. => ' + randomAge)
			if (randomAge<20){
				return 'You are to young to be Jaime'
            }
            else{
                return 'OOOOOOH Jaime, you are getting old so bad!'
            }
	}
	else{
		return 'You\'re not JAIME!'
	}
}
var x = function(){
	return 'Jaime'
}
var y = function(){
	return randomNumber()
}
var randomNumber = function(){
	return Math.floor(Math.random() * (50 - 0) + 0)
}
console.log(padre())
/*function GenerateRandom(){
    ...
    return randomNumber.
}

function father(){
    var numR = GenerateRandom()
    return ...numR()...
}*/

n) Refactorizemos nuestro código dejando todas las funciones separadas del padre, éste último se encargará de llamarlas todas y mostrar sus resultados.

var padre = function(){
	console.log('The first function returns: ' + x())
	if(x()==='Jaime'){
	var randomAge = y()
	console.log('Random Age.. =>' + randomAge)
			if (randomAge<20){
				return 'You are to young to be Jaime'
            }
            else{
                return 'OOOOOOH Jaime, you are getting old so bad!'
            }
	}
	else{
		return 'You\'re not JAIME!'
	}
}
var x = function(){
	return 'Jaime'
}
var y = function(){
	return randomNumber()
}
var randomNumber = function(){
	return Math.floor(Math.random() * (50 - 0) + 0)
}
console.log(padre())
/*function father(){
    myFunction();
    myOtherFunction();
    myOtherVarFunction();
    return...
}*/
ñ) Intenta hacer push de todos los resultados de las funciones a una array declarada en el padre, muestra los resultados de esta array como siempre.

var padremayor = function(){
	return padre
}
var padre = function(){
	console.log('The first function returns: ' + x())
	if(x()==='Jaime'){
		console.log('The second function returns: ' + y())
			if (randomNumber<20){
	console.log('You are to young to be Jaime')
}
else{
	console.log('OOOOOOH Jaime, you are getting old so bad!')
}
	}
	else{
		console.log('You\'re not JAIME!')
	}
}
var x = function(){
	return 'Jaime'
}
var y = function(){
	return randomNumber
}
var randomNumber = Math.floor(Math.random() * (50 - 0) + 0)

var array = []
array.push (x())
console.log(array)
array.push (padremayor())
console.log(array)


console.log(padre())


o) Crea una funcion que llame a nuestra funcion father(), ésta, a parte de llamarla, deberá hacer otro push "hello from the dark side..." a la array que crea father(). Muestra toda la array completa.

var father = function(){
	return a + b + c
}
var a = function(){
	return 'Jaime'
}
var b = function(){
	return 'Rocafull'
}
var c = function(){
	return 'Valero'
}
var array = []
array.push('Hello from the dark side...')
array.push(father())
console.log(array)

p) 🔞 👊🏼 Llama a ésta nueva función dos veces, muestra sus resultados por pantalla y compara sus randomNums, mostrando un mensaje indicando cual es mayor. El nombre pasado por parámetro también deberá ser random entre una array de nombres, con lo cual, también deberás refactorizar las funciones hijas.

/*function gandFather(){
    var names = ['hulk', 'ironMan', '...']
    var selectedName...
    var selectedName2...
    if(father(selectedName) > father(selectedName2))
        ...
    else
        ...
    return father(selectedName).push().join()...
}*/
p1) En lugar de retornar los valores como una array, prepara tus funciones para que devuelvan los resultados como OBJECTS. Muestra por pantalla los objetos sin estilizar el output.

var father = function(){
	return a + b + c
}
var a = function(){
	return 'Jaime'
}
var b = function(){
	return 'Rocafull'
}
var c = function(){
	return 'Valero'
}
var object = {}
object.push('Hello from the dark side...')
object.push(father())
console.log(object)

p2) Muestra los resultados de los OBJECTS recorriendolos y mostrando los valores de una forma amigable.