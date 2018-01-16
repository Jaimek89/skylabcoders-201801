Haz el juego del Pasapalabra, el programa deberá lanzar la definición de una palabra
y el usuario deberá adivinar que palabra estamos tratando, por ejemplo:

'>>>'With the letter "M", Capital of Spain, located in the center of the country.
'>>>' "Madrid"
'>>>'Correct, you have 1 Point!

Tu juego debería hacer una pregunta por cada letra del alfabeto, al final del juego,
y habiendo respondido todas las letras, deberá indicarle al usuario cuantas letras ha fallado
y cuantas ha acertado. Si el usuario responde con "pasapalabra" el juego deberá estar 
preparado para entender que en ese momento, el usuario no responderá esa pregunta, 
y no estará acertada ni fallada, la dejará para la siguiente ronda. El juego deberá, 
cuando finalize, mostrar un ranking de usuarios con el nombre y ordenados por cantidad 
de letras acertadas.


/********************************************************************************************************/
						//PASAPALABRA BASE CON 3 PALABRAS EN FUNCIONES
/********************************************************************************************************/

var rankingUsers = [];

function pasapalabra(){

	var correct = 0
	var wrong = 0

	function game(){

		var name = prompt('¿Hola, como te llamas?')

		console.log('Encantado ' + name + ', empecemos a jugar.')

		a(),b(),c(),

		result()

		ranking()

		newGame()

		function a(){

			var a = prompt('Letra A => Objeto de cama, utilizado para reposar la cabeza.')

			if(a==='Almohada'){
				console.log('Correcto, obtienes 1 punto')
				correct++
			} else if (a==='Pasapalabra'){
				/*Si el usuario contesta pasapalabra, esta pregunta se deberá repetir en la ronda 2*/
			} else {
				console.log('Error, la respuesta correcta era: Almohada')
				wrong++
			}

		}

		function b(){

			var a = prompt('Letra B => Animal de carga o persona con inteligencia reducida.')

			if(a==='Burro'){
				console.log('Correcto, obtienes 1 punto')
				correct++
			}

			else if(a==='Pasapalabra'){/*Si el usuario contesta pasapalabra, esta pregunta se deberá repetir en la ronda 2*/}

			else{
				console.log('Error, la respuesta correcta era: Burro')
				wrong++
			}

		}

		function c(){

			var a = prompt('Letra C => Conjunto de personas que viven juntas bajo ciertas reglas o que tienen los mismos intereses.')

			if(a==='Comunidad'){
				console.log('Correcto, obtienes 1 punto')
				correct++
			}

			else if(a==='Pasapalabra'){/*Si el usuario contesta pasapalabra, esta pregunta se deberá repetir en la ronda 2*/}

			else{
				console.log('Error, la respuesta correcta era: Comunidad')
				wrong++

			}	

		}

		function result(){

			rankingUsers.push({name:name, score:correct})
			console.log ('Tu resultado final ha sido: ' + correct + ' respuestas acertadas, pero sin embargo has tenido: ' + wrong + ' respuestas erroneas')

		}

		function ranking() {  //sort the ranking and print it

				rankingUsers.sort(function (a, b){return (b.score - a.score)});

				rankingUsers.forEach(function(obj) {
					console.log((rankingUsers.indexOf(obj)+1) + "º "+ obj.name + " => "+ obj.score + " points ");
				})	
				
		}

		function newGame(){
		
			var askGame = confirm('Hey, would you like to play one more time?')
	
			if(askGame === true){
				pasapalabra()
			}

			else{
				return 0
			}
		
		}	

	}	

	game()

}

pasapalabra()



//Letra A => Objeto de cama, utilizado para reposar la cabeza.
//'Almohada'

//Animal de carga o persona con inteligencia reducida.
//'Burro'

//Conjunto de personas que viven juntas bajo ciertas reglas o que tienen los mismos intereses.
//'Comunidad'

//Piedra preciosa extraida de una mina.
//'Diamante'

//Animal de pequeño tamaño con aguijón venenoso, principalmente desértico.
//'Escorpion'

//Nombre de futbolista apodado El Niño.
//'Fernando'

//Animal de granja que te canta los buenos dias.
//'Gallo'

//Marca Japonesa principalmente de motos.
//'Honda'

//Pais asiático, segundo en poblacion mundial.
//'India'

//Mes del año que da la bienvenida al verano.
//'Junio'

//Ciudad Japonesa, segunda en población.
//'Kioto'

//Satelite de la tierra que la voltea en 30 dias.
//'Luna'

//Parte que, junto con otra igual, constituye un todo.
//'Mitad'

//Sentimiento de pena por la lejanía, la ausencia, la privación o la pérdida de alguien o algo queridos.
//'Nostalgia'

//Que tiene poca luz o carece de ella.
//'Oscuro'

//Que tiene un tamaño menor de lo normal.
//'Pequeño'

//Indica que el nombre al que acompaña o al que sustituye ocupa el lugar número 5 en una serie.
//'Quinto'

//Órgano glandular situado en la región lumbar que tiene la función de segregar la orina.
//'Riñon'

//Que es liso y blando al tacto.
//'Suave'

//Parte sólida del planeta que no está cubierta por el mar.
//'Tierra'

//Relativo a Ucrania, país del este de Europa, o a sus habitantes.
//'Ucraniano'

//Cualidad de veloz.
//'Velocidad'

//Rechazo a los extranjeros.
//'Xenofobia'

//Antiguo pais formado por las actuales Serbia y Montenegro.
//'Yugoslavia'

//Que usa con mayor habilidad las extremidades del lado izquierdo.
//'Zurdo'

/********************************************************************************************************/
						//PASAPALABRA MEJORADO
/********************************************************************************************************/

function pasapalabra(){

	var rankingUsers = []

	game()

	function game(){

		function newGame(){
			
			var askGame = confirm('¿Te gustaría jugar de nuevo?')
		
			if(askGame === true){
				game()
			}

			else{
				return 0
			}
		
		}

		correct = 0
		wrong = 0

		var questions = [
    		{ letter: "a", answer: "Almohada", status: 0, question: ("CON LA A. Objeto de cama, utilizado para reposar la cabeza.") },
			{ letter: "b", answer: "Burro", status: 0, question: ("CON LA B. Animal de carga o persona con inteligencia reducida.") },
   			{ letter: "c", answer: "Comunidad", status: 0, question: ("CON LA C. Conjunto de personas que viven juntas bajo ciertas reglas o que tienen los mismos intereses.") },
   			{ letter: "d", answer: "Diamante", status: 0, question: ("CON LA D. Piedra preciosa extraida de una mina.") },
			{ letter: "e", answer: "Escorpion", status: 0, question: ("CON LA E. Animal de pequeño tamaño con aguijón venenoso, principalmente desértico.") },
    		{ letter: "f", answer: "Fernando", status: 0, question: ("CON LA F. Nombre de futbolista apodado El Niño.") },
    		{ letter: "g", answer: "Gallo", status: 0, question: ("CON LA G. Animal de granja que te canta los buenos dias.") },
    		{ letter: "h", answer: "Honda", status: 0, question: ("CON LA H. Marca Japonesa principalmente de motos.") },
    		{ letter: "i", answer: "India", status: 0, question: ("CON LA I. Pais asiático, segundo en poblacion mundial.") },
    		{ letter: "j", answer: "Junio", status: 0, question: ("CON LA J. Mes del año que da la bienvenida al verano.") },
    		{ letter: "k", answer: "Kioto", status: 0, question: ("CON LA K. Ciudad Japonesa, segunda en población.") },
    		{ letter: "l", answer: "Luna", status: 0, question: ("CON LA L. Satelite de la tierra que la voltea en 30 dias.") },
    		{ letter: "m", answer: "Mitad", status: 0, question: ("CON LA M. Parte que, junto con otra igual, constituye un todo.") },
    		{ letter: "n", answer: "Nostalgia", status: 0, question: ("CON LA N. Sentimiento de pena por la lejanía, la ausencia, la privación o la pérdida de alguien o algo queridos.") },
    		{ letter: "o", answer: "Oscuro", status: 0, question: ("CON LA O. Que tiene poca luz o carece de ella.") },
    		{ letter: "p", answer: "Pequeño", status: 0, question: ("CON LA P. Que tiene un tamaño menor de lo normal.") },
    		{ letter: "q", answer: "Quinto", status: 0, question: ("CON LA Q. Indica que el nombre al que acompaña o al que sustituye ocupa el lugar número 5 en una serie.") },
    		{ letter: "r", answer: "Riñon", status: 0, question: ("CON LA R. Órgano glandular situado en la región lumbar que tiene la función de segregar la orina.") },
    		{ letter: "s", answer: "Suave", status: 0, question: ("CON LA S. Que es liso y blando al tacto.") },
    		{ letter: "t", answer: "Tierra", status: 0, question: ("CON LA T. Parte sólida del planeta que no está cubierta por el mar.") },
    		{ letter: "u", answer: "Ucraniano", status: 0, question: ("CON LA U. Relativo a Ucrania, país del este de Europa, o a sus habitantes.") },
    		{ letter: "v", answer: "Velocidad", status: 0, question: ("CON LA V. Cualidad de veloz.") },
    		{ letter: "x", answer: "Xenofobia", status: 0, question: ("CONTIENE LA X. Rechazo a los extranjeros.") },
    		{ letter: "y", answer: "Yugoslavia", status: 0, question: ("CONTIENE LA Y. Antiguo pais formado por las actuales Serbia y Montenegro.") },
    		{ letter: "z", answer: "Zurdo", status: 0, question: ("CON LA Z. Que usa con mayor habilidad las extremidades del lado izquierdo.") },
		]

		var name = prompt('¿Hola, como te llamas?')
		alert('Encantado ' + name + ', empecemos a jugar.')

		ask()

		function ask(){
	            
	        var rounds = questions.length
	           
	        do{
				rounds--
	                
				for(prop in questions){   
	                    
					if(questions[prop].status==0){         

						var answer = prompt(questions[prop].question)

							if(answer==questions[prop].answer){
								correct++
								questions[prop].status=1
								alert('Correcto, obtienes 1 punto')

							}else if(answer=="Pasapalabra"){
								alert('Pasapalabra')

							}else{
								wrong++;
								questions[prop].status=1;
								alert('Error, la respuesta correcta era ' + questions[prop].answer)
							} 
					}                        
					
				}

			}while(rounds>0)

			result()
		}

	    function result(){

			rankingUsers.push({name:name, score:correct})
			alert('Tu resultado final ha sido: ' + correct + ' respuestas acertadas, y: ' + wrong + ' respuestas erroneas')

			ranking()

		}

		function ranking() {  //sort the ranking and print it

			rankingUsers.sort(function (a, b){return (b.score - a.score)});

			rankingUsers.forEach(function(obj) {
				console.log((rankingUsers.indexOf(obj)+1) + "º "+ obj.name + " => "+ obj.score + " points ");
			})	

			newGame()
				
		}

	}

}

pasapalabra()

/*	
	var questions = [
    		{ letter: "a", answer: "Almohada", status: 0, question: ("CON LA A. Objeto de cama, utilizado para reposar la cabeza.") },
   		 	{ letter: "b", answer: "Burro", status: 0, question: ("CON LA B. Animal de carga o persona con inteligencia reducida.") },
    		{ letter: "c", answer: "Comunidad", status: 0, question: ("CON LA C. Conjunto de personas que viven juntas bajo ciertas reglas o que tienen los mismos intereses.") },
    		{ letter: "d", answer: "Diamante", status: 0, question: ("CON LA D. Piedra preciosa extraida de una mina.") },
    		{ letter: "e", answer: "Escorpion", status: 0, question: ("CON LA E. Animal de pequeño tamaño con aguijón venenoso, principalmente desértico.") },
    		{ letter: "f", answer: "Fernando", status: 0, question: ("CON LA F. Nombre de futbolista apodado El Niño.") },
    		{ letter: "g", answer: "Gallo", status: 0, question: ("CON LA G. Animal de granja que te canta los buenos dias.") },
    		{ letter: "h", answer: "Honda", status: 0, question: ("CON LA H. Marca Japonesa principalmente de motos.") },
    		{ letter: "i", answer: "India", status: 0, question: ("CON LA I. Pais asiático, segundo en poblacion mundial.") },
    		{ letter: "j", answer: "Junio", status: 0, question: ("CON LA J. Mes del año que da la bienvenida al verano.") },
    		{ letter: "k", answer: "Kioto", status: 0, question: ("CON LA K. Ciudad Japonesa, segunda en población.") },
    		{ letter: "l", answer: "Luna", status: 0, question: ("CON LA L. Satelite de la tierra que la voltea en 30 dias.") },
    		{ letter: "m", answer: "Mitad", status: 0, question: ("CON LA M. Parte que, junto con otra igual, constituye un todo.") },
    		{ letter: "n", answer: "Nostalgia", status: 0, question: ("CON LA N. Sentimiento de pena por la lejanía, la ausencia, la privación o la pérdida de alguien o algo queridos.") },
    		{ letter: "o", answer: "Oscuro", status: 0, question: ("CON LA O. Que tiene poca luz o carece de ella.") },
    		{ letter: "p", answer: "Pequeño", status: 0, question: ("CON LA P. Que tiene un tamaño menor de lo normal.") },
    		{ letter: "q", answer: "Quinto", status: 0, question: ("CON LA Q. Indica que el nombre al que acompaña o al que sustituye ocupa el lugar número 5 en una serie.") },
    		{ letter: "r", answer: "Riñon", status: 0, question: ("CON LA R. Órgano glandular situado en la región lumbar que tiene la función de segregar la orina.") },
    		{ letter: "s", answer: "Suave", status: 0, question: ("CON LA S. Que es liso y blando al tacto.") },
    		{ letter: "t", answer: "Tierra", status: 0, question: ("CON LA T. Parte sólida del planeta que no está cubierta por el mar.") },
    		{ letter: "u", answer: "Ucraniano", status: 0, question: ("CON LA U. Relativo a Ucrania, país del este de Europa, o a sus habitantes.") },
    		{ letter: "v", answer: "Velocidad", status: 0, question: ("CON LA V. Cualidad de veloz.") },
    		{ letter: "x", answer: "Xenofobia", status: 0, question: ("CONTIENE LA X. Rechazo a los extranjeros.") },
    		{ letter: "y", answer: "Yugoslavia", status: 0, question: ("CONTIENE LA Y. Antiguo pais formado por las actuales Serbia y Montenegro.") },
    		{ letter: "z", answer: "Zurdo", status: 0, question: ("CON LA Z. Que usa con mayor habilidad las extremidades del lado izquierdo.") },
		]
*/











