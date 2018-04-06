"use strict";
//Make the game like Midnight
//Use a random number generator where it prints the results of the 6 dice rolls
//Make a function that checks all 6 numbers and logs a score based on the conditions


//function rollDie (){
	//let fourSidedDice= Math.floor((Math.random()*4) +1);
	//let sixSidedDice=Math.floor((Math.random()*6) +1);
	//let eightSidedDice=Math.floor((Math.random()*8) +1);
	//let tenSidedDice=Math.floor((Math.random()*10) +1);
	//let twelveSidedDice=Math.floor((Math.random()*12) +1);
	//let twentySidedDice=Math.floor((Math.random()*20) +1);
	//let diceRoll = [fourSidedDice,sixSidedDice,eightSidedDice,tenSidedDice,twelveSidedDice,twentySidedDice];
	//return diceRoll;
//}

function rollTheDie(sides) {

	let roll = Math.floor((Math.random()* sides) +1);
return roll;
	// body...
}


function diceToBeRolled(message) {
	let die = prompt (message);
	switch(die){
		case "4":
			return die;
			break;
		case "6":
			return die;
			break;
		case "8":
			return die;
			break;
		case "10":
			return die;
			break;
		case "12":
			return die;
			break;
		case "20":
			return die;
			break;
		default:
			alert("Please enter 4, 6, 8, 10, 12, or 20.");
			prompt(message);



	}
	let number = parseInt(die);
	if (number === 4 | number === 6 | number === 8 | number === 10 | number === 12 | number === 20){
		return number;
	// body...
	}
	else {
		alert("Please enter 4, 6, 8, 10, 12, or 20.");
	}
}


function diceCheck() {
	let userInput = diceToBeRolled("What sided dice do you want to roll?");
	let outcome = rollTheDie(userInput);
	console.log(outcome);
	// body...
}

diceCheck();
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

