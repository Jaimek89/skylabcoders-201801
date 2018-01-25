//### is_object

function isObject(a){
    if(typeof a=='object'){
        return true
    }else{
        return false
    }
}
console.log(isObject(person = {name:'Jaime',age:8})) 
console.log(isObject('Jaime'))

//### Create object car

function car(brand,model,color) {
	this.brand = brand;
	this.model = model;
    this.color = color;
}
var seat = new car ('Seat','Leon','Black')
console.log('My',seat.color,seat.brand,seat.model,'is great!')