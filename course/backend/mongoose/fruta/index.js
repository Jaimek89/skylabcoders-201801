//Arrancar Mongodb: ./bin/mongod --dbpath ./db
//Arrancar la consola de Mondodb: ./bin/
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/almacen');

//Los modelos de mongoose es la forma de llamar a nuestras colecciones de mongodb!!
const Frutas = mongoose.model('frutas', { name: String, origen: String })

//Creamos una nueva fruta
// const platanos = new Frutas ({ name: 'Platanos', origen: 'España'})
// platanos.save()
// .then(fruta => console.log(`Se ha creado una fruta correctamente: ${fruta}`))

// const naranjas = new Frutas ({ name: 'Naranjas', origen: 'Marruecos'})
// naranjas.save()
// .then(fruta => console.log(`Se ha creado una fruta correctamente: ${fruta}`))

//Modificamos el origen de la fruta 'Naranjas'
Frutas.findOneAndUpdate({ name: 'Naranjas', origen: 'Marruecos'}, { origen: 'Tunez'})
.then(fruta => console.log(`Se ha modificado el origen de la fruta: ${fruta}`))