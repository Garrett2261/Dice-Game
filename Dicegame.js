"use strict";
//Make the game like Farkle 
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
}

let result=rollDie();
alert(result);