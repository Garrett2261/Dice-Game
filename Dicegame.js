"use strict";
//Make the game like Midnight
//Use a random number generator where it prints the results of the 6 dice rolls
//Make a function that checks all 6 numbers and logs a score based on the conditions


function rollDie (){
	let fourSidedDice= Math.floor((Math.random()*4) +1);
	let sixSidedDice=Math.floor((Math.random()*6) +1);
	let eightSidedDice=Math.floor((Math.random()*8) +1);
	let tenSidedDice=Math.floor((Math.random()*10) +1);
	let twelveSidedDice=Math.floor((Math.random()*12) +1);
	let twentySidedDice=Math.floor((Math.random()*20) +1);
	let diceRoll = [fourSidedDice,sixSidedDice,eightSidedDice,tenSidedDice,twelveSidedDice,twentySidedDice];
	return diceRoll;
	//console.log(diceRoll);
}

//rollDie();

//diceRoll.prototype.removeIf = rollDie

function AddDice(total, num){
	return total + num;
}

function compressDice(item){
	

	let roll =rollDie();
	//find a way to get the roll 
	let total = roll.reduce(AddDice);
	let value
	console.log(total);



//function () {
	// body...
//}
}

//function startGame (){
	//let numberOfPlayers = prompt();
	//let number = parseInt(numberOfPlayers);
	//let allDie = [number]
	//if (number > 0){
		//return allDie;
	//}

//}

//startGame(); 

//Make the function where it takes the user input for number of players and that input decides how many times the compressDice function runs. 
//function startGame(message){
	//let numberOfPlayers = prompt(message);
	//Make the input for number of players go into an array and then 
	//let allPlayers = 
//}






compressDice();
compressDice();
compressDice();

	// body...
//if the rolls includes a 1 and 4 remove those values (or keep them but add the remaining values)

//}
//have the rollTheDie function take the number of dice that are thrown from dice to be rolled and then have it go through an array and do the random function for each array input
//function rollTheDie() {
	//let diceTotal = [];
	//let dice = [4, 6, 8, 10, 12, 20];
	//let allDice = [4, 6, 8, 10, 12, 20];
	//let arrayLength = allDice.length;
	//for (let i=0; i<arrayLength; i++){
			//let numbers = Math.floor((Math.random()* allDice[i]) +1);
			//let dieArray = [numbers];

			
	//}
	//let roll = Math.floor((Math.random()* sides) +1);
	//let dice = [4, 6, 8, 10, 12, 20];
	//for (i = 0; i<6; i++){
		//diceTotal.push(roll);
	//}
	//return roll;
	// body...
//}

//rollTheDie();


//}

//function diceToBeRolled() {
	//let die = prompt ();
	
	//switch(die){
	
		//case "4":
		//case "6":
		//case "8":
		//case "10":
		//case "12":
		//case "20":
			//return die;
			//break;
		//default:
			//alert("Please enter 4, 6, 8, 10, 12, or 20.");
			//return diceToBeRolled(message);
			//break;		

	//}
//}
	//let number = parseInt(die);
	

	//if (number === 4 | number === 6 | number === 8 | number === 10 | number === 12 | number === 20){
		//return number;
	// body...
	//}
	//else {
		//alert("Please enter 4, 6, 8, 10, 12, or 20.");
	//}
//}

//function groupDice(number) {
	//let results = [];

	// body...
//}


//function getArray(sides) {
	//let groupOfDice = [];
	//while ()
	// body...
//}




//function diceCheck() {
	//let userInput = diceToBeRolled("Please roll the 4 sided dice, then the 6, 8, 10, 12, and 20.");
	//let outcome = rollTheDie(userInput);
	//return outcome;
	//console.log(outcome);
//}
	

//function resultArray(){
	//let arrayOne = [];
	//arrayOne.push(diceCheck);

//}

//resultArray();



	//let allDiceThrown = [];
	//for (var i = 0; i < 6; i++) {
		//let userInput = diceToBeRolled("Please roll the 4 sided dice, then the 6, 8, 10, 12, and 20.");
		//let outcome = rollTheDie(userInput);
		//let allDiceThrown = [];
		//if (userInput === 4 && userInput === 6 && userInput === 8 && userInput === 10 && userInput === 12 && userInput === 20) {
			//allDiceThrown.push(outcome);
			//console.log(allDiceThrown);
		//}

	//}
	

	//console.log(allDiceThrown);
	// body...
//}


//have the diceCheck function run multiple times and 
//function diceArray(){
	
	//let totalRolls = [1, 2, 3, 4, 5, 6];
	//for (let i=0; i<totalRolls.length; i++){
		//diceToBeRolled();
		//let arrayDice = diceToBeRolled();
		//console.log(arrayDice);

	//}
//}


//diceArray();
//diceCheck();
//diceCheck();
//diceCheck();
//diceCheck();
//diceCheck();
//diceCheck();


//create a for loop that runs the function again. Possibly 6 times because that's what my game needs. 
//Also create an array for the loop that pushes the values in the array

//
//rollTheDie();

//Make a function that finds the number of sides and validates if it is correct 

//let dice = diceRoll.reverse();
//console.log(dice);

//

//Make an array with the results of the dice throw


//function (argument) {
	// body...
//}

//function function_name(argument) {
	// body...
//}


//function rollDice(number) {

	// body...
//}

