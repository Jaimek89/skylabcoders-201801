//Calculator!

//Haz una calculadora. Un único programa al que le pasarás dos parámetros y el usuario podrá visualizar por consola la suma, resta, 
//multiplicación y división entre ambos números. El resultado debería ser mostrado con 3 decimales como mucho (En caso de que hubieran). 

//El programa debe contemplar y actuar correctamente en el caso de que el usuario introduzca cualquier cosa que no sean números.

//Si el usuario introduce un solo numero, deberá mostrar SOLO su raíz cuadrada, 
//si vuelve a introducir los dos, volverá a mostrar las 4 operaciones de siempre.

//Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.

//Hint_ => results = [num1 + num2 = resultSum, num1-num2 = resultRest ....]

---------------------------------------------Calculadora--------------------------------
var num1 = 10
var num2 = 49
var resultSum = (num1 + num2)
var resultRest = (num1 - num2)
var resultMult = (num1 * num2)
var resultDiv = (num1 / num2).toFixed(3)
var results = [num1 + '+' + num2 + ' = ' + resultSum, num1 + '-' + num2 + ' = ' + resultRest, num1 + 'x' + num2 + ' = ' + resultMult, num1 + '/' + num2 + ' = ' + resultDiv]

if (isNaN(num1)){
	console.log('Por favor, intrduzca un número, gracias.')
}
else if (isNaN(num2)){
	console.log('Por favor, intrduzca un número, gracias.')
}
else if (num1===0){
	console.log(Math.sqrt(num2))
}
else if (num2===0){
	console.log(Math.sqrt(num1))
}
else{
	console.log(results)
}
--------------------------------------------Calculadora 2 -----------------------------------
function calculator(num1, num2){
  if (isNaN(num1) || (num2 && isNaN(num2))) {
    return 'Por favor, intrduzca un número, gracias.'
  }

  if (!num2) {
    return num1 + '^(1/2) = ' + Math.sqrt(num1)
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
---------------------------------Calculadora 3 -----------------------------------
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
----------------------------------------------------------------------------------------------------