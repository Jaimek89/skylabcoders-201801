//1.a) Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, muestres por pantalla los numeros unidos por parejas
//(1-2, 2-3, 3-4...), además, cada elemento de la pareja deberá estar multiplicada por 2.

var showNums = [1,2,3,4,5,6,7,8,9]
function nums(){
    for(var i = 0; i < showNums.length-1; i++){
        console.log(i+1 + 'º pareja => ' + showNums[i]*2 + '-' + showNums[i+1]*2)
    }
}
nums()
// output =>
//1ª pareja 2 - 4
//2ª pareja 4 - 6
//3ª pareja 6 - 8
//4ª pareja 8 - 10
//5ª pareja 10 - 12
//6ª pareja 12 - 14
//7ª pareja 14 - 16
//8ª pareja 16 - 18
Hint: Métodos útiles => push() - join() - map()
---------------------------------------------------------------------------------------------------------
//2.a1) La funcion debería aceptar la array a tratar como argumento.

function showNums(nums){
    for(var i = 0; i < nums.length-1; i++){
        console.log(i+1 + 'º pareja => ' + nums[i]*2 + '-' + nums[i+1]*2)
    }
}
showNums([1,2,3,4,5,6,7,8,9])
// output =>
// 1ª pareja 2 - 4
// 2ª pareja 4 - 6
// 3ª pareja 6 - 8
//...
---------------------------------------------------------------------------------------------------------
//3.a2) Pasa también el numero a multiplicar a la función como argumento

function showNums(nums,multBy){
	console.log('El número escogido es: ' + multBy)
    for(var i = 0; i < nums.length-1; i++){
        var pairs = (i+1 + 'º pareja => ' + nums[i]*(multBy) + '-' + nums[i+1]*(multBy))
        console.log(pairs)
    }
}
showNums([1,2,3,4,5,6,7,8,9],15)

/*function showNums(1,2,3,4,5,...,12){ //<= el último número de arguments lo podemos tratar como el numero multiplicador...
}*/
// output =>
// El numero escogido es: 12
// 1ª pareja 12 - 24
// 2ª pareja 24 - 36
// 3ª pareja 36 - 48
// 4ª pareja 48 - 60
// 5ª pareja 60 - 72
// ...
---------------------------------------------------------------------------------------------------------
//4.a3) La función debería ser capaz de recibir el numero de parejas que queremos devolver del total.

function showNums(nums,multBy,filter){
	console.log('El número escogido es: ' + multBy)
	console.log('Se quieren mostrar las ' + filter + ' primeras parejas')
    for(var i = 0; i < filter; i++){
        var pairs = (i+1 + 'º pareja => ' + nums[i]*(multBy) + '-' + nums[i+1]*(multBy))
        console.log(pairs)
    }
}
showNums([1,2,3,4,5,6,7,8,9],15,3)

/*function showNums(1,2,3,4,5,...,12, 3){ // <= ahora, el último numero lo podriamos tomar como el delimitador
}*/
// output =>
// El numero escogido es: 12
// Se quieren mostrar las 3 primeras parejas
// 1ª pareja 12 - 24
// 2ª pareja 24 - 36
// 3ª pareja 36 - 48
---------------------------------------------------------------------------------------------------------
//5.b) Volvemos a la numeros... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci? 
//https://www.mathsisfun.com/numbers/fibonacci-sequence.html

function fibo(){
	var a = 0
	var b = 1
	var result = b
		console.log(a)
		console.log(b)
	for(var i=1;i<10;i++){
		console.log(result=a+b)
		var a=b
		var b=result
	}
}
fibo()

//function fibo(){}
// output: 0 1 1 2 3 5 8...
---------------------------------------------------------------------------------------------------------
//6.b2) Puedes añadir además, la posición de cada resultado?

function fibo(){
	var a = 0
	var b = 1
	var result = b
		console.log(a + ' => position 1º')
		console.log(b + ' => position 2º')
	for(var i=1;i<5;i++){
		console.log((result=a+b) + ' => position ' + (i+2) + 'º')
		var a=b
		var b=result
	}
}
fibo()
---------------------------------------------------------------------------------------------------------
//7.b3) Ahora, inserta los resultados en una array y muestralos todos juntos de una manera amigable.

var arrayFibo = []
function fibo(){
	var a = 0
	var b = 1
	var result = b
		arrayFibo.push(a)
		arrayFibo.push(b)
	for(var i=1;i<5;i++){
		arrayFibo.push(result=a+b)
		var a=b
		var b=result
	}
}
fibo()
console.log((arrayFibo).join(' + '))
---------------------------------------------------------------------------------------------------------
//8.b4) Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde queremos llegar.

var arrayFibo = []
function fibo(pos){
	var a = 0
	var b = 1
	var result = b
		arrayFibo.push(a)
		arrayFibo.push(b)
	for(var i=1;i<(pos-1);i++){
		arrayFibo.push(result=a+b)
		var a=b
		var b=result
	}
}
fibo(10)
console.log((arrayFibo).join(' + '))

//function fibo(10){}
//... 55 - pos 10º
---------------------------------------------------------------------------------------------------------
//9.b5) Ahora, muestra los resultados en forma piramidal:

var arrayFibo = []
function fibo(pos){
		var a = 0
		var b = 1
		var result = b
		arrayFibo.push(a)
		console.log(arrayFibo)
		arrayFibo.push(b)
		console.log(arrayFibo)
	for(var i=1;i<(pos-1);i++){
		arrayFibo.push(result=a+b)
		console.log(arrayFibo)
		var a=b
		var b=result
	}
	for(var j=pos; j>0;j--){
		arrayFibo.pop()
		console.log(arrayFibo)
	}
}
fibo(15)

/*function fiboPymamid(num){}
0
0 1
0 1 1
0 1 1 2
0 1 1 2 3
0 1 1 2 3 5
0 1 1 2 3 5 8 //To position. num
0 1 1 2 3 5
0 1 1 2 3
0 1 1 2
0 1 1
0 1
0*/
---------------------------------------------------------------------------------------------------------
//10.c) Simple Scripting program. Crea un programa que transforme un número de 4 dígitos en otro diferente con las posiciones de los dígitos cambiadas, creando un nuevo código

function codeScript(code){

	var array = Array.from(code) //Transformamos nuestra string en un array
	var eliminated = array.shift() // Eliminamos nuestro primer número
	array.push(eliminated) // Añadimos nuestro primer número al final
	console.log(array.toString())

}
codeScript('1234')

/*var code = 3712;
function codeScript(code){}
//output:
 ⬇︎//First call to codeScript()
- 7123
 ⬇︎//Second call to codeScript()
- 1237
 ⬇︎//Third call to codeScript()
- 2371
// At Four call, should return the original value
El primer numero se traslada a la última posicion. El segundo, el tercero y el cuarto suben una posición.*/
---------------------------------------------------------------------------------------------------------
//11.c2) Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez y devolver los dos códigos encriptados (Los dos códigos se deberían encriptar en la misma función)

function codeScript(code1,code2){

	function encrypt(code){
		var array = Array.from(code) //Transformamos nuestra string en un array
		var eliminated = array.shift() // Eliminamos nuestro primer número
		array.push(eliminated)
		var result = array.push(eliminated).toString() // Añadimos nuestro primer número al final
		return result
	}

	var result1 = encrypt(code1)
	var result2 = encrypt(code2)

	console.log('Nuestra nueva string 1 nos da el resultado: ' + result1 + ' , Nuestra nueva string 2 nos da el resultado: ' + result2)
}
codeScript('1234','6789')

//function codeScript(code1, code2){}
---------------------------------------------------------------------------------------------------------
//12.c3) Ahora, vamos a añadir un nivel más de seguridad. Despues de cambiar la posición de los dígitos, multiplicaremos a cada miembro por un numero cuya multiplicación no sea superior a 10. (Si es superior a 10, conseguiremos una multplicación de dos digitos y el código ya no sería de 4 valores)

function codeScript(code1,code2){

	array1 = Array.from(code1) //Transformamos nuestra string 1 en un array
	array2 = Array.from(code2) ////Transformamos nuestra string 2 en un array

	eliminated1 = array1.shift() // Eliminamos nuestro primer número de la string 1
	eliminated2 = array2.shift() // Eliminamos nuestro primer número de la string 2

	array1.push(eliminated1) // Añadimos nuestro primer número al final de la string 1
	array2.push(eliminated2) // Añadimos nuestro primer número al final de la string 2

	array1 = (array1.join('')*2) //Convertimos nuestra array1 a número y asi ya lo podemos multiplicar
	array2 = (array2.join('')*2) //Convertimos nuestra array2 a número y asi ya lo podemos multiplicar

	console.log('Nuestra nueva string 1 nos da el resultado: ' + array1 + ' , Nuestra nueva string 2 nos da el resultado: ' + array2)
}
codeScript('1234','4321')

---------------------------------------------------------------------------------------------------------
//13.c4) Ahora, implementa en otra funcion aparte el decrypter(), que recibirá como argumento un código encriptado (y correspondientemente multiplicado en el apartado c3) y nos devuelva el código desencriptado.

function codeDecript(code1,code2){

	array1 = Array.from(code1) // Transformamos nuestra string 1 en un array
	array2 = Array.from(code2) // Transformamos nuestra string 2 en un array

	eliminated1 = array1.splice(0,3) // Eliminamos nuestros tres primeros números de la string 1
	eliminated2 = array2.splice(0,3) // Eliminamos nuestros tres primeros números de la string 2

	array1.push(eliminated1.join('')) // Añadimos nuestros tres primeros números al final de la string 1, convertidos en string
	array2.push(eliminated2.join('')) // Añadimos nuestros tres primeros números al final de la string 2, convertidos en string

	array1 = (array1.join('')/2) //Convertimos nuestra array1 a número y asi ya lo podemos dividir
	array2 = (array2.join('')/2) //Convertimos nuestra array2 a número y asi ya lo podemos dividir

	console.log('Nuestra nueva string 1 nos da el resultado: ' + array1 + ' , Nuestra nueva string 2 nos da el resultado: ' + array2)
}
codeDecript('4682','6428')

---------------------------------------------------------------------------------------------------------
//14.c5) Añade las dos funciones a la misma función padre, de forma que encripte y desencripte a la vez cuando termine de ejecutarse.

function codeScript(code1,code2){

	var result1 = encrypt(code1)
	var result2 = encrypt(code2)
	var result11 = codeDecript(result1)
	var result22 = codeDecript(result2)

	function encrypt(code){
		var array = Array.from(code) //Transformamos nuestra string en un array
		var eliminated = array.shift() // Eliminamos nuestro primer número
		array.push(eliminated)
		var result = array.join('') // Añadimos nuestro primer número al final
		return result
	}

	function codeDecript(code){
			
		var array1 = Array.from(code) // Transformamos nuestra string 1 en un array
		var eliminated1 = array1.splice(0,3) // Eliminamos nuestros tres primeros números de la string 1
		array1.push(eliminated1.join(''))
		var resultDec = array1.join('') // Añadimos nuestros tres primeros números al final de la string 1, convertidos en string
		return resultDec

	}

	console.log('Nuestra nueva string 1 nos da el resultado: ' + result1 + ' , Nuestra nueva string 2 nos da el resultado: ' + result2)
	console.log('Nuestra nueva string 1 nos da el resultado: ' + result11 + ' , Nuestra nueva string 2 nos da el resultado: ' + result22)
}
codeScript('1234','6789')

//function codeScript(code1, code2){... codeDecrypt(code1Encrypt,code2Encrypt)}
---------------------------------------------------------------------------------------------------------
15.c6) El usuario podrá solo introducir letras, cada número del 0 al 9 corresponderá a varias letras. Podéis seguir este esquema.

var dictionary = {
    0: ['A', 'K', 'T', 'F', 'O', 'Y'],
    1: ['B', 'L', 'U', 'G', 'P', 'Z'],
    2: ['C', 'M', 'V', 'H', 'Q', '.'],
    3: ['D', 'N', 'W', 'I', 'R', ','],
    4: ['E', 'Ñ', 'X', 'J', 'S', ' ']
}
function codeScript("HI  ", "WE  ", "NEED", "HELP"){}
"HI__" = "dictionary[7][0]+dictionary[8][0]+dictionary[9][2]+dictionary[9][2]..."
---------------------------------------------------------------------------------------------------------
/*16.d) Crea un programa que use la encriptacion Romana, como es? Si tenemos la palabra SKYLAB, la palabra encriptada será SLKAYB. Si divides la palabra original en 2 grupos obtienes:
SKY
|||
LAB Entonces, uniendo las primeras letras de cada grupo, las segundas y las terceras obtienes SLKAYB.
Entonces, el programa deberá recibir SKYLAB y retornar SLKAYB*/

function encrypt(str){
	var part1 = []
	var part2 = []
	var newCode = []
	for (var i=0; i<str.length; i++){
		if(i<(str.length/2)){
			part1.push(str[i])
		}
		else{
			part2.push(str[i])
		}
	}
	for (var i=0; i<part1.length; i++){
		newCode.push(part1[i])
		newCode.push(part2[i])
	}
	console.log(newCode.join(''))
}
encrypt('skylab')
---------------------------------------------------------------------------------------------------------
//17.d2) Programa el desencriptador, pasa como parámetro SLKAYB y que devuelva SKYLAB.

function decrypt(dstr){
	var part1 = []
	var part2 = []
	var newCode = []
	for (var i=0; i<6; i++)
		if(i%2==0){
			part1.push(dstr[i])
		}
		else{
			part2.push(dstr[i])
		}
		console.log((part1.join('')+part2.join('')))
}
decrypt('slkayb')

Hint: for decrypt, only catch the pair words like: S L K A Y B , then, you get SKY, the next step is catch the odd words, S L K A Y B, group the two groups and you get the original word.
---------------------------------------------------------------------------------------------------------
//18.d3) Agrupa la función Encrypt y decrypt en una unica función, de forma que introduzcas como parámetro SKYLAB y devuelva SKYLAB (con todas las transformaciones internas hechas y mostrando, entre medias, la transformación)

function encrypt(str){
	var part1 = []
	var part2 = []
	var newCode = []
	for (var i=0; i<str.length; i++){
		if(i<(str.length/2)){
			part1.push(str[i])
		}
		else{
			part2.push(str[i])
		}
	}
	for (var i=0; i<part1.length; i++){
		newCode.push(part1[i])
		newCode.push(part2[i])
	}
	console.log(newCode.join(''))

	var partA = []
	var partB = []
	for (var i=0; i<str.length; i++)
		if(i%2==0){
			partA.push(newCode[i])
		}
		else{
			partB.push(newCode[i])
		}
		console.log((partA.join('')+partB.join('')))
}
encrypt('skylab')
---------------------------------------------------------------------------------------------------------
//19.d4) Lo tienes? Prueba ahora con SKYLABCODERS. Cambia la función para que pueda aceptar palabras más largas.

function encrypt(str){
	var part1 = []
	var part2 = []
	var newCode = []
	for (var i=0; i<str.length; i++){
		if(i<(str.length/2)){
			part1.push(str[i])
		}
		else{
			part2.push(str[i])
		}
	}
	for (var i=0; i<part1.length; i++){
		newCode.push(part1[i])
		newCode.push(part2[i])
	}
	console.log(newCode.join(''))

	var partA = []
	var partB = []
	for (var i=0; i<str.length; i++)
		if(i%2==0){
			partA.push(newCode[i])
		}
		else{
			partB.push(newCode[i])
		}
		console.log((partA.join('')+partB.join('')))
}
encrypt('skylabcoders')
---------------------------------------------------------------------------------------------------------
//20.e) Crea un programa al que le introduces un número como parámetro del 0 al 100 y devuelve el número transformado a alfabeto normal, es decir:

var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

function sayItWithWords(num){
	if(num<=99 && num>=20){
		unidades=num%10	
		decenas=num/10
		return (tens[Math.trunc(decenas)] + '-' + units[unidades])
	}
	if(num<=19 && num>=10){
		return teens[(num-10)]
	}
	if(num<=9){
		return units[num]
	}
}
sayItWithWords(9)
/*sayItWithWords(5) => //output Five
sayItWithWords(23) => //output twenty-three
sayItWithWords(71) => //output seventy-one
Hint:

var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];*/
---------------------------------------------------------------------------------------------------------
//21.e2) Ahora, el output debería ser capaz de, aparte de devolver el número traducido, devolver también los números por los que está formado:

var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

function sayItWithWords(num){
	if(num<=99 && num>=20){
		unidades=num%10	
		decenas=num/10
		return tens[Math.trunc(decenas)] + '-' + units[unidades] + ', ' + tens[Math.trunc(decenas)] + ' + ' + units[unidades] + ' / ' + num
	}		
	if(num<=19 && num>=10){
		return teens[(num-10)] + ', ' + teens[(num-10)] + ' / ' + num
	}
	if(num<=9){
		return units[num] + ', ' + units[num] + ' / ' + num
	}
}
sayItWithWords(31)
/*sayItWithWords(5) => //output Five, five / 5
sayItWithWords(23) => //output twenty-three, twenty + three / 20 + 3
sayItWithWords(71) => //output seventy-one, seventy + one / 70 + 1*/
---------------------------------------------------------------------------------------------------------
//22.e3) Cambia tu programa para que acepte cualquier número entre 0 y 1000.

var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

function sayItWithWords(num){
	if(num<=999 && num>=100){
		unidades2=num%100
		unidades=unidades2%10	
		decenas2=num/10
		decenas=decenas2%10
		centenas=num/100
		return units[Math.trunc(centenas)] + ' hundred ' + tens[Math.trunc(decenas)] + '-' + units[unidades] + ', ' + units[Math.trunc(centenas)] + ' hundred ' + ' + ' + tens[Math.trunc(decenas)] + ' + ' + units[unidades] + ' / ' + num
	}	
	if(num<=99 && num>=20){
		unidades=num%10	
		decenas=num/10
		return tens[Math.trunc(decenas)] + '-' + units[unidades] + ', ' + tens[Math.trunc(decenas)] + ' + ' + units[unidades] + ' / ' + num
	}		
	if(num<=19 && num>=10){
		return teens[(num-10)] + ', ' + teens[(num-10)] + ' / ' + num
	}
	if(num<=9){
		return units[num] + ', ' + units[num] + ' / ' + num
	}
}
sayItWithWords(551)

/*sayItWithWords(500) => //output five hundred , five hundred  / 500
sayItWithWords(233) => //output two hundred thirty three, two hundred + thirty + three/ 200 + 30 + 3
sayItWithWords(498) => //output four hundred ninety eight, four hundred + ninety + eight/ 400 + 90 + 8*/
---------------------------------------------------------------------------------------------------------
//23.f) Recibiendo el siguiente texto por parámetro a tu función... :

function replaceWord(text){
	text = text.replace(/\,/gi,'')
	text = text.replace(/\./gi,',')
	text = text.replace(/dolor/gi,'potato')
	text = text.replace(/lorem/gi,'tomato')
	text = text.replace(/labor/gi,'cucumber')
	text = text.replace(/consequator/gi,'garlic')
	text = text.replace(/ipsum/gi,'onion')
	console.log(text)
}
replaceWord('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.')

/*Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.*/

Prepara dicha función para que modifique y devuelva el texto bajo estas reglas: 
Signos de puntuación: -	"." => "," - "," => "" 
Palabras: - "dolor" => "potato" - "lorem" => "tomato" - "labor" => "cucumber" - "consequatur" => "garlic" - "ipsum" => "onion"
---------------------------------------------------------------------------------------------------------
//24.f1) Añade una funcionalidad que cuente cuantos cambios/coincidencias ha encontrado de cada palabra, y te los muestre de una forma amigable para el usuario

function replaceWord(text){
	text = text.replace(/\,/gi,'')
	text = text.replace(/\./gi,',')
	text = text.replace(/dolor/gi,'potato')
	text = text.replace(/lorem/gi,'tomato')
	text = text.replace(/labor/gi,'cucumber')
	text = text.replace(/consequatur/gi,'garlic')
	text = text.replace(/ipsum/gi,'onion')
	console.log(text)
	console.log('Se han encontrado ' + text.match(/potato/g).length + ' (dolor) y se han sustituido por (potato)')
	console.log('Se han encontrado ' + text.match(/tomato/g).length + ' (lorem) y se han sustituido por (tomato)')
	console.log('Se han encontrado ' + text.match(/cucumber/g).length + ' (labor) y se han sustituido por (cucumber)')
	console.log('Se han encontrado ' + text.match(/garlic/g).length + ' (consequatur) y se han sustituido por (garlic)')
	console.log('Se han encontrado ' + text.match(/onion/g).length + ' (ipsum) y se han sustituido por (onion)')
}
replaceWord('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.')

/*  console.log('Se han encontrado ' + text.match(/\./g).length + ' (,) y se han sustiruido por ( )')
	console.log('Se han encontrado ' + text.match(/\,/g).length + ' (.) y se han sustiruido por (,)') */
