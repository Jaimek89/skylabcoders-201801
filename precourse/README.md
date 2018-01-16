# **SKYLAB CODERS**
![image](/Users/jaimerocafullvalero/Downloads/skylablog.png)
## PRECOURSE
En el precourse de skylab coders nos requerían hacer 6 proyectos, utilizando JavaScript - HTML - CSS
### CALCULADORA
El primer proyecto consistia en crear una calculadora básica utilizando los métodos que habías aplicado en los ejercicios.
```
function calculator(num1, num2){
  if (isNaN(num1) || (isNaN(num2))) {
    return 'Por favor, intrduzca un número, gracias.'
  }

  if (!num2) {
    return num1 + '^(1/2) = ' + Math.sqrt(num1).toFixed(3)
  }
  if (!num1) {
    return num2 + '^(1/2) = ' + Math.sqrt(num2).toFixed(3)
  }

  var sum = (num1+num2).toFixed(3)
  var res = (num1-num2).toFixed(3)
  var mul = (num1*num2).toFixed(3)
  var div = (num1/num2).toFixed(3)

  var result = [
    num1 + ' + ' + num2 + ' = ' + parseFloat(sum),
    num1 + ' - ' + num2 + ' = ' + parseFloat(res),
    num1 + ' * ' + num2 + ' = ' + parseFloat(mul),
    num1 + ' / ' + num2 + ' = ' + parseFloat(div),
  ]

  return result
}
calculator(5,'J')
```
#### NOTAS
Este tema sirvó para romper mano con JavaScript, 
### AEROLINEAS
El segundo proyecto era modificar los vuelos de una aerolinea mediante objetos, que es la forma en que organizan los vuelos.
### BINGO
El tercero y mas complicado era crear el juego del Bingo, en este tema habiamos aprendido a usar functions. Es el primero en el que tienes que pensar la estructura del programa.
### PASAPALABRA
En el juego de pasapalabra, el objetivo era unificar los conceptos adquiridos anteriormente.
### CALCULADORA CON HTML-CSS
En este proyecto poníamos en práctica los conociamientos adquiridos con HTML y CSS.
### PASAPALABRA CON HTML-CSS
Este era el proyecto final, en el cual tenías que aplicar todo lo aprendido.
### CONCLUSIONES
El precurso resulta verdaderamente interesante y complicado, tienes que esforzarte al máximo para poder realizar los ejercicios y mejoran verdaderamente tus capacidades lógicas.