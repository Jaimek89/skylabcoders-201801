// This is a example of array of objects... each position of array contains one object...
var flights = [
{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
{id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
{id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
]

var aerolineas = function(){
var name = 'Jaime'
console.log('Hola ' + name + ' , gracias por viajar con aerolineas SkyLab')
console.log('A continuación le mostraremos el listado de los vuelos que tenemos programados para hoy:')

for(i=0; i<flights.length; i++){
	if (flights[i].scale === true){
	var scaleOk = 'tiene una escala'
}
else {
	var scaleOk = 'no tiene ninguna una escala'
}
    console.log('El vuelo ' + flights[i].id + ' con origen: ' + flights[i].from + ', y destino: ' + flights[i].to +  ' tiene un coste de: ' + 
    flights[i].cost + '€, y ' + scaleOk)
}

var suma = 0
for(i=0; i<flights.length; i++){
    suma += flights[i].cost
}

console.log('El coste medio de nuestros vuelos es de ' + suma/flights.length + '€')

var flightsWithScale = flights.filter(function(flights){
    return flights.scale === true
})
.map(function(flights){
    return flights.id;
});
var listFlightsWithScale = function(){
console.log('Actualmente tenemos ' + flightsWithScale.length + ' vuelos con escala, y son los siguientes: ' + flightsWithScale)
}
console.log(listFlightsWithScale())

for(i=5; i<flights.length; i++){
    console.log('El vuelo ' + flights[i].id + ' tiene como destino: ' + flights[i].to)
}
}
console.log(aerolineas())