function getComputerChoice() {
	let choice = Math.floor(Math.random() * 3);
	switch(choice) {
		case 0:
			return "rock";
			break;
		case 1:
			return "paper";
			break;
		case 2:
			return "scissors";
	}
}


function getPlayerChoice() {
	let keepRunning = true;
	let playerChoice;
	while (keepRunning == true) {
		playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
		(playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") ?
		keepRunning = false : alert("Wrong input!");	
	}	
	return playerChoice;
}


function playRound(playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {
		return `No one wins! You both picked ${computerChoice}.`;
	} else if ((playerChoice === "rock" && computerChoice === "paper") ||
		(playerChoice === "paper" && computerChoice === "scissors") ||
		(playerChoice === "scissors" && computerChoice === "rock")) {
			return `You lost! You picked ${playerChoice} and the computer picked ${computerChoice}.`;
	} else {
		return `You won! You picked ${playerChoice} and the computer picked ${computerChoice}.`;
	}
}


function getPlayerChoice() {
	let keepRunning = true;
	let playerChoice;
	while (keepRunning == true) {
		playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
		(playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") ?
		keepRunning = false : alert("Wrong input!");	
	}	
	return playerChoice;
}

