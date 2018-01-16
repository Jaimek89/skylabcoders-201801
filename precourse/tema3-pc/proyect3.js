//BINGO GAME!

//Realiza un programa que simule un Bingo. Cuando se ejecute, pedirá el nombre del jugador y deberá guardarse.
//Durante el primer turno se mostrará un cartón con 15 números (excluyendo el 0 siempre),
//para pasar al siguiente turno el usuario deberá confirmar mediante confirm() visualizándose otro número, 
//si coincide con alguno de los existentes en el cartón, cambiará por una "X" o un 0. 
//El cartón se mostrará, al final de cada turno, con los cambios efectuados, indicándole al usuario qué número se ha encontrado. 
//El programa deberá preguntar al usuario al inicio de cada turno si desea continuar, en caso de que se continúe, 
//seguirá el mismo patrón que hasta el momento.

//Por supuesto, cuando todos los números de una misma linea estén en "X", mostrará un mensaje "LINEA!", pero la ejecución seguirá, 
//el juego solo acabará cuando todos los números estén a "X".

//Cuando el juego concluya, deberá decirle al usuario en cuantos turnos se ha completado el cartón. 
//Por último, deberá preguntar si desea volver a jugar.

Secuence:
>>> bingo()
<<< prompt('Tell me, who are you?')
>>> Hello *name*, ready to play? This is your card:
...
<<< confirm('Next turn, you confirm?') // true / false
>>> We find 1 match! This is the status of your card now:
...
...
>>> Congrats! You finish the Bingo game in X turns! Do you want to play again?
<<< confirm('Play again?') // true / false

var bingoCard = [
    {number: randomNumber, matched: false},
    {number: randomNumber, matched: false},
    {number: randomNumber, matched: false},
    {number: randomNumber, matched: false},
    {number: randomNumber, matched: false},
    //next line
    {number: randomNumber, matched: false},
    {number: randomNumber, matched: false},
    {number: randomNumber, matched: false},
    {number: randomNumber, matched: false},
    {number: randomNumber, matched: false},
    //next line
    {number: randomNumber, matched: false},
    {number: randomNumber, matched: false},
    {number: randomNumber, matched: false},
    {number: randomNumber, matched: false},
    {number: randomNumber, matched: false},
]

var randomNumber = Math.floor(Math.random() * (90 - 1) + 1)
console.log(bingoCard)

------------------------------------------------------------------------------
//var name
//name = prompt('Tell me, who are you?')
//console.log('Hello ' + name + ', ready to play? This is your card:')
------------------------------------------------------------------------------
var getRandomNumber = function(){
	return Math.floor(Math.random() * (5-0)+1)
}
var array = []
for (var j=0; j<5; j++){
	array.push(getRandomNumber())
	for (var i=0; i<5; i++){

	}

}

---------------------------------------------------

------------------------------------------------------------------------------
/*var getRandomNumber = function(){
	return Math.floor(Math.random() * (15 - 0) + 1)
}
var carton = []
for (i=1; i<16; i++){
	carton.push(getRandomNumber())
}
	console.log(carton)*/ 

//De esta forma generamos un carton de 15 números aleatorios pero se repiten...
------------------------------------------------------------------------------
function bingo(){
	var getRandomNumber = function(){
	return Math.floor(Math.random() * (15 - 0) + 1)
	}
	var carton = []
	for (i=1; i<16; i++){
	carton.push(getRandomNumber())
	}
	var count = 0
	name = prompt('Tell me, who are you?')
	var name
	console.log('Hello ' + name + ', ready to play? This is your card:' + carton)
	function generateRandom(){
		return Math.floor(Math.random()*(15-0+1));
	}
	function newTurn(){
		count++
		var newRandom = generateRandom()
		for(var i = 0; i < carton.length;i++){
			if(newRandom === carton[i]){
				console.log('found coincidence!' + newRandom)
				carton[i] = 'X'
			}
		}
		console.log(carton)
		askTurn()
    }
	function askTurn(){
		if(carton[0] === 'X' && carton[1] === 'X' && carton[2] === 'X' && carton[3] === 'X' && carton[4] === 'X' && carton[5] === 'X' && carton[6] === 'X' && carton[7] === 'X' && carton[8] === 'X' && carton[9] === 'X' && carton[10] === 'X' && carton[11] === 'X' && carton[12] === 'X' && carton[13] === 'X' && carton[14] === 'X'){
			console.log('You have finished the game in ' + count + ' times! CONGRATULATIONS.')
			return 0
		}
		if(carton[0] === 'X' && carton[1] === 'X' && carton[2] === 'X' && carton[3] === 'X' && carton[4] === 'X'){
			console.log('Line 1 DONE!!!')
		}
		if(carton[5] === 'X' && carton[6] === 'X' && carton[7] === 'X' && carton[8] === 'X' && carton[9] === 'X'){
			console.log('Line 2 DONE!!!')
		}
		if(carton[10] === 'X' && carton[11] === 'X' && carton[12] === 'X' && carton[13] === 'X' && carton[14] === 'X'){
			console.log('Line 3 DONE!!!')
		}
		var ask = confirm('New turn?')
		if(ask === true){
			newTurn()
		}
		else{
			return 0
		}
	}
	askTurn()
}
bingo()
function newGame(){
		var askGame = confirm('Hey, would you like to play one more time?')
		if(askGame === true){
			bingo()
		}
		else{
			return 0
		}
	}
newGame()
------------------------------------------------------------------------------
/*function bingo(){
	var carton = [2,3,6,8,1]
	function generateRandom(){
		return Math.floor(Math.random()*(10-0+1));
	}
	function newTurn(){
		var newRandom = generateRandom()
		for(var i = 0; i < carton.length;i++){
			if(newRandom === carton[i]){
				console.log('found coincidence!' + newRandom)
				carton[i] = 'X'
			}
		}
		console.log(carton)
		askTurn()
    }
	function askTurn(){
		if(carton[0] === 'X' && carton[1] === 'X' && carton[2] === 'X' && carton[3] === 'X' && carton[4] === 'X'){
			console.log('You finish the game! XAO PESCAO.')
			return 0
		}
		var ask = confirm('New turn?')
		if(ask === true){
			newTurn()
		}
		else{
			return 0
		}
	}
	askTurn()
}
bingo()*/





