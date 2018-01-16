//a) Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)

function avenger(name,clase,id) {
	this.name = name;
	this.clase = clase;
	this.id = id;
}
var toni = new avenger ('Toni', 'VII', 1);
console.log(Object.keys(toni)) 
-----------------------------
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
console.log(Object.keys(avenger)) 
//Este método devuelve una matriz con los mismos (no en la cadena de prototipos) nombres ("keys") enumerables de las popiedades de un objeto

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
console.log(Object.getOwnPropertyNames(avenger)) 
// Este método devuelve una matriz que contiene todos los nombres (enumerables o no) de las propiedades de un objeto

//console.log(something, somethingMore, somethingMoreAndMore)
//name, class, id

//b) Ahora, crea una función que liste solo los valores de las propiedades.
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
for (prop in avenger){
console.log(avenger[prop])
}
//console.log(somethingThatShowsThings) //Tony, VII, 01

//c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
avenger.class = 'XI'

console.log('new class = ' + avenger.class)
//console.log(property.ThisProperty) //new class = XI

//d) Ahora, elimina la propiedad ID y asegura los cambios.

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
delete avenger.id
console.log(avenger.id)
//console.log(property.ThisProperty) //Not exist :(

//e) Añade una nueva propiedad, por ejemplo city y dale un valor.

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
avenger.city = 'New York City',
//http://www.w3schools.com/js/js_properties.asp

//e1) Asegura los cambios solo imprimiendo esa nueva propiedad.

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
avenger.city = 'New York City',
console.log('City => ' + avenger.city)
//console.log(city) // City => New York City

//f) Lista el numero de propiedades que contiene el objeto.

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 ,
    city : 'New York City',
};
console.log('There are ' + Object.keys(avenger).length + ' info fields') 
//console.log() // There are 4 info fields

//g) Cambia la propiedad name por fullName.

var avenger = { 
    name : "Tony Stark", 
    class : "VII", 
    id : 1 ,
    city : 'New York City',
};
var fullName = avenger.name
console.log(fullName)

//g1) Asegura los cambios.

var avenger = { 
    fullName : "Tony Stark", 
    class : "VII", 
    id : 1 ,
    city : 'New York City',
};
console.log(avenger.fullName)
//console.log(fullName) // Tony Stark

//h) Lista todas las propiedades del objeto a través de un console.log()
var avenger = { 
    fullName : "Tony Stark", 
    class : "VII", 
    id : 1 ,
    city : 'New York City',
};
console.log('Hi there, I\'m ' + avenger.fullName + ' my class is ' + avenger.class + ', and my id is ' + avenger.id + ', actually I\'m living in ' + avenger.city)
//console.log(...) // "Hi there, I'm Tony Stark..."

//h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...
var avenger = { 
    fullName : "Tony Stark", 
    class : "VII", 
    id : 1 ,
    city : 'New York City',
    job : 'Ingeneer',
    studies : 'MIT',
    markAv : 10,
};
console.log(avenger)

//h2) Asegura los cambios volviendo a listar los valores del objeto
var avenger = { 
    fullName : "Tony Stark", 
    class : "VII", 
    id : 1 ,
    city : 'New York City',
    job : 'Ingeneer',
    studies : 'MIT',
    markAv : 10,
};
for (prop in avenger){
console.log(avenger[prop])
}
//console.log(location) // NYC

//i) Crea un constructor de objetos llamado "Avenger", al cual le pasarás ciertos parametros, creando una instancia del objeto con las propiedades de nuestro objeto creado. (Échale un ojo a la referencia de abajo.)

function avenger(fullName, classRoom, city, job, studies, markAv) {
	this.fullName = fullName;
	this.classRoom = classRoom;
	this.city = city;
	this.job = job;
	this.studies = studies;
	this.markAv = markAv;
}
var tonyStark = new avenger ('Tony Stark', 'XI', 'NYC', 'Ingeneer', 'MIT', 10)
console.log(tonyStark)
//http://www.w3schools.com/js/js_object_definition.asp
//Example:
//function avenger(fullName, classRoom, city, job, studies,markAv) {
    //this.fullName = fullName;
    //this.classRoom = classRoom;
    //this.city = city;
    //this.job= job;
    //this.studies= studies;
    //this.markAv = markAv;
//}
//var tonyStark = new avenger ("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10)
//console.log(tonyStark)

//j) Crea otro objeto y imprime sus propiedades por pantalla.

function avenger(fullName, classRoom, city, job, studies, markAv) {
	this.fullName = fullName;
	this.classRoom = classRoom;
	this.city = city;
	this.job = job;
	this.studies = studies;
	this.markAv = markAv;
}
var tonyStark = new avenger ('Tony Stark', 'XI', 'NYC', 'Ingeneer', 'MIT', 10)
var hulk = new avenger ('Hulk', 'XIII', 'Sao Paolo', 'Doctor', 'Medicine', 21)
console.log(hulk)
//var otherAvenger = new Avenger...
//console.log(otherAvenger) // Hulk...

//k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia. . Example of property:

//De esta manera ponemos la función dentro del objeto.
function avenger(fullName, classRoom, city, job, studies, markAv) {
	this.fullName = fullName;
	this.classRoom = classRoom;
	this.city = city;
	this.job = job;
	this.studies = studies;
	this.markAv = markAv;
	avenger.prototype.listProperties = function(){
		console.log(this.fullName + ', ' + this.classRoom)
	}
}
var tonyStark = new avenger ('Tony Stark', 'XI', 'NYC', 'Ingeneer', 'MIT', 10)
var hulk = new avenger ('Hulk', 'XIII', 'Sao Paolo', 'Doctor', 'Medicine', 21)

console.log(hulk.listProperties())
-----------------------------------------------------------------------------------------------
//De esta manera ponemos la funcion fuera del objeto, ambas funcionan correctamente.
function avenger(fullName, classRoom, city, job, studies, markAv) {
	this.fullName = fullName;
	this.classRoom = classRoom;
	this.city = city;
	this.job = job;
	this.studies = studies;
	this.markAv = markAv;
}
var tonyStark = new avenger ('Tony Stark', 'XI', 'NYC', 'Ingeneer', 'MIT', 10)

avenger.prototype.listProperties = function(){
		console.log(this.fullName + ', ' + this.classRoom)
	}

console.log(tonyStark.listProperties())
//...
//...
//...
//this.listProperties: function(){
    //console.log(this.name + ", " + this.class) 
//};
//}
//Spoiler! 😅

//l) Ahora, crea una función que solo liste los nombres de los objetos instanciados

function avenger(fullName, classRoom, city, job, studies, markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job = job;
    this.studies = studies;
    this.markAv = markAv;
    if (!avenger.prototype.names) { avenger.prototype.names = [] }
    avenger.prototype.names.push(fullName)
    avenger.prototype.listNames = function(){
        return avenger.prototype.names
    }
}
var tonyStark = new avenger ('Tony Stark', 'XI', 'NYC', 'Ingeneer', 'MIT', 10)
var hulk = new avenger ('Hulk', 'XIII', 'Sao Paolo', 'Doctor', 'Medicine', 21)
var thor = new avenger ('Thor', 'XV', 'Valhalla', 'Semi-God', 'Teology', 105)
avenger.prototype.listNames()
//console.log(someFunction) // Tony Stark, Hulk, Thor...

//m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, crea una función para que solo liste los nombres de los Avengers que sean de la misma ciudad y cuantos hay.

function avenger(fullName, classRoom, city, job, studies, markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job = job;
    this.studies = studies;
    this.markAv = markAv;
}

//creamos los objetos usando el molde
var tonyStark = new avenger ('Tony Stark', 'XI', 'NYC', 'Ingeneer', 'MIT', 10)
var hulk = new avenger ('Hulk', 'XIII', 'NYC', 'Doctor', 'Medicine', 21)
var thor = new avenger ('Thor', 'XV', 'Valhalla', 'Semi-God', 'Teology', 105)
//añadimos los vengadores a una array vacio creando un array de objetos
var avengers = []
avengers.push(tonyStark)
avengers.push(hulk)
avengers.push(thor)
//almacenamos en una nueva variable, según la documentación del filter, los objetos cuya condicion despues del return sea === true, else, no se devuelve
var filteredAvengers = avengers.filter(function(oAvenger){
	return oAvenger.city === 'NYC'
})
//recorremos el array donde hemos almacenado el resultado del filter()
filteredAvengers.forEach(function(oAvg){
	console.log(oAvg.fullName)
})
---------------------------------------------------------------------------------------
var avenger = [
{name: 'Tony Stark', classRoom: 'XI', city: 'NYC', job: 'Ingeneer', studies: 'MIT', markAv: 10},
{name: 'Hulk', classRoom: 'XIII', city: 'NYC', job: 'Doctor', studies: 'Medicine', markAv: 21},
{name: 'Thor', classRoom: 'XV', city: 'Oslo', job: 'Semi-God', studies: 'Universes', markAv: 105},
];

var avengerInNYC = avenger.filter(function(avenger) {
    return avenger.city === 'NYC'
})
.map(function(avenger){
    return avenger.name;
});
var listCity = function(){
console.log('Are ' + avengerInNYC.length + ' avengers living in NYC: ' + avengerInNYC)
}
console.log(listCity())
//console.log(myFunction) // Are 3 avengers living in NYC: Tony, Hulk, Hawkeye
//Hint: Intenta tener a todos los objetos dentro de una array, al tener todos los datos juntos, podrás filtrarlos y mostrarlos...
//Resources => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?v=control => https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach

//n) Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y muestre la media.

function avenger(fullName, classRoom, city, job, studies, markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job = job;
    this.studies = studies;
    this.markAv = markAv;
    if (!avenger.prototype.marks) { avenger.prototype.marks = [] }
    avenger.prototype.marks.push(markAv)
    avenger.prototype.listMarks = function(){
        return avenger.prototype.marks
    }
}
var tonyStark = new avenger ('Tony Stark', 'XI', 'NYC', 'Ingeneer', 'MIT', 10)
var hulk = new avenger ('Hulk', 'XIII', 'Sao Paolo', 'Doctor', 'Medicine', 21)
var thor = new avenger ('Thor', 'XV', 'Valhalla', 'Semi-God', 'Teology', 105)
var jaime = new avenger ('Jaime', 'V', 'Barcelona', 'Ingeneer', 'MIT', 3)
console.log(avenger.prototype.listMarks())
var suma = 0
for(i=0; i<avenger.prototype.listMarks().length; i++){
    suma += avenger.prototype.listMarks()[i]
}
console.log('La suma de todas las markAv es: ' + suma)
var average = (suma/avenger.prototype.listMarks().length)
console.log('La media de nuestras markAv es: ' + average)

ñ) Ahora, crea una funcion que recoja los avengers en parejas (será necesario que tengan un id, por comodidad al aparejarlos), es decir, de dos en dos, compare sus markAv y que muestre el mayor de ambos.

var avenger = [
{name: 'Tony Stark', classRoom: 'XI', city: 'NYC', job: 'Ingeneer', studies: 'MIT', markAv: 10, id: 0},
{name: 'Hulk', classRoom: 'XIII', city: 'NYC', job: 'Doctor', studies: 'Medicine', markAv: 21, id: 1},
{name: 'Thor', classRoom: 'XV', city: 'Oslo', job: 'Semi-God', studies: 'Universes', markAv: 105, id: 2},
{name: 'Jaime', classRoom: 'V', city: 'Barcelona', job: 'Ingeneer', studies: 'MIT', markAv: 3, id: 3}
];

var avengerToCompareOne = 3
var avengerToCompareTwo = 0

if (avenger[avengerToCompareOne].markAv > avenger[avengerToCompareTwo].markAv){
    console.log(avenger[avengerToCompareOne].name + ' vs ' + avenger[avengerToCompareTwo].name + ' => ' + avenger[avengerToCompareOne].name + ' is better!')
}
else {
    console.log(avenger[avengerToCompareOne].name + ' vs ' + avenger[avengerToCompareTwo].name + ' => ' + avenger[avengerToCompareTwo].name + ' is better!')
}

//console.log(myFunction()) 
// HawkEye vs Tony => Tony is better! \n Thor vs Hulk => Hulk is better! \n Vision vs Captain America => Vision is better

ñ1) Intenta crear las parejas de forma aleatoria.
var avenger = [
{name: 'Tony Stark', classRoom: 'XI', city: 'NYC', job: 'Ingeneer', studies: 'MIT', markAv: 10, id: 0},
{name: 'Hulk', classRoom: 'XIII', city: 'NYC', job: 'Doctor', studies: 'Medicine', markAv: 21, id: 1},
{name: 'Thor', classRoom: 'XV', city: 'Oslo', job: 'Semi-God', studies: 'Universes', markAv: 105, id: 2},
{name: 'Jaime', classRoom: 'V', city: 'Barcelona', job: 'Ingeneer', studies: 'MIT', markAv: 3, id: 3}
];

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (4 - 0) + 0);
}

var avengerToCompareOne = getRandomArbitrary()
var avengerToCompareTwo = getRandomArbitrary()

if (avenger[avengerToCompareOne].markAv > avenger[avengerToCompareTwo].markAv){
    console.log(avenger[avengerToCompareOne].name + ' vs ' + avenger[avengerToCompareTwo].name + ' => ' + avenger[avengerToCompareOne].name + ' is better!')
}
if (avenger[avengerToCompareOne].markAv < avenger[avengerToCompareTwo].markAv) {
    console.log(avenger[avengerToCompareOne].name + ' vs ' + avenger[avengerToCompareTwo].name + ' => ' + avenger[avengerToCompareTwo].name + ' is better!')
}
else {
    console.log('Son el mismo vengador idiota')
}
//Hint=> https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random