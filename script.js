const buttons = document.querySelectorAll("[data-choice");
buttons.forEach(button => {
	button.addEventListener("click", getPlayerChoice)
});



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


function getPlayerChoice(e) {
	console.log(e.target.dataset.choice);
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




function game(rounds) {
	for (var i = 0; i < rounds; i++) {
		console.log(playRound(getPlayerChoice(), getComputerChoice()));
	}
	
}


game(2);