const buttons = document.querySelectorAll("[data-choice");
buttons.forEach(button => {
	button.addEventListener("click", getPlayerChoice)
});


function getPlayerChoice(e) {
	playRound(e.target.dataset.choice, getComputerChoice());
}


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

let wins = 0;
let losses = 0;
let total = 0;


function playRound(playerChoice, computerChoice) {
	const result = document.querySelector("[data-p-type='result']");
	
	if (playerChoice === computerChoice) {
		total++;
		result.textContent = `No one wins! You both picked ${computerChoice}. Score: ${wins} to ${losses}`;
	} else if ((playerChoice === "rock" && computerChoice === "paper") ||
	(playerChoice === "paper" && computerChoice === "scissors") ||
	(playerChoice === "scissors" && computerChoice === "rock")) {
		losses++;
		total++;
		result.textContent = `You lost! You picked ${playerChoice} and the computer picked ${computerChoice}. Score: ${wins} to ${losses}`;
	} else {
		wins++;
		total++;
		result.textContent = `You won! You picked ${playerChoice} and the computer picked ${computerChoice}. Score: ${wins} to ${losses}`;
	}

	if (total == 5) {
		displayWinner();
	}
}

function displayWinner() {
	document.querySelector("[data-p-type='header']").textContent = "Game Over!";

	const result = document.querySelector("[data-p-type='result']");
	buttons.forEach(button => button.removeEventListener("click", getPlayerChoice));
	if (wins > losses) result.textContent = `You won the game with a score of ${wins} to ${losses} losses`; 
	else if (wins < losses) result.textContent = `The computer won with ${losses} wins and ${wins} losses`;
	else result.textContent = `This is unexpected. You both have ${wins} wins and ${losses} losses!`;
}