//a) Declara tu nombre y muéstralo por consola:
var name = 'Jaime'
console.log(name) //Mark

//b) Declara tu edad y muéstralo por consola:
var age = 28
console.log(age) //38

//c) Declara tu nombre, tu apellido y tu edad en un array en diferentes posiciones y muéstrala por consola:
var info = ['Jaime', 'Rocafull', '28']
console.log(info) //['Mark', 'Zuckerberg', 21]

//d) Declara tu nombre y tu edad dentro de un objeto y muéstralo por consola:
var data = { name: 'Jaime', age: '28'}
console.log(data) //{ name: 'Mark', age: 21}

//e) Ahora utiliza el array que has creado anteriormente para recorrerlo y mostrar una a una todas las posiciones del array.
var info = ['Jaime', 'Rocafull', '28']
for(var i=0;i<3;i++){
    console.log(info[i])
}
 //'Mark'
 //'Zuckerberg'
 //21

//f) Crea una estructura condicional que imprima el número mayor entre dos números.
var a = 25
var b = 12
if (a<b) {
 console.log(b)
} else {
 console.log(a)
}
//25

//f1) Crea otra condicion else if para contemplar la posibilidad de que los dos números sean iguales:

var a = 25
var b = 12
if (a<b) {
 console.log(b)
} else if(a==b){
	console.log('The numbers are equal')
} else {
 console.log(a)
}
// The numbers are equal

//g) Crea una array de 5 numeros, y recorrela, mostrando además un mensaje cuando, esté a la mitad, muestre un mensaje 'We are in the middle of loop'.
var list = [4,2,6,7,8]
for(var i=0;i<list.length;i++){
	console.log(list[i])
    if(i==Math.trunc(list.length/2)){
   console.log("We are in the middle of loop")
	}
}

//g1) Declara tu nombre y tu edad dos variables y crea un condicional para, en caso de no coincidir con tus datos, mostrar un error
Hint: https://www.w3schools.com/js/js_comparisons.asp (Logical Operators section)

var myName = 'Jaime'
var myAge = 28
if(myAge === 28 && myName === 'Jaime'){
	console.log("Hi!! Glad to see u again!")
}8
else{
	console.log("this is not you!")
}

//g2) Crea una array, introduce los datos anteriores y unos cuantos más de forma que al recorrer la array, muestre un mensaje cuando encuentre tus datos.

var data = ['Alberto', 22, 'Jaime', 28, 'Jorge', 37, 'Fernando', 18]
for(var i=0;i<data.length;i++){
	console.log(data[i])
    if(data[i] === 28){
    	console.log("We find your data! " + data[i])}
    	if(data[i] === 'Jaime'){
    		console.log("We find your data! " + data[i])}
}