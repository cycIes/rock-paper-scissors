function getComputerChoice() {
    let randChoice = Math.floor(Math.random() * 3);

    switch (randChoice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "scissors";
    }
}

function getHumanChoice() {
    let userChoice = prompt("Choose rock, paper, or scissors: ");
    return userChoice;
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let human = humanChoice.toLowerCase();
        let computer = computerChoice.toLowerCase();

        if (human == computer) {
            console.log("It's a draw!");
        } else if (human == "rock") {
            if (computer == "scissors") {
                console.log("You win! Rock beats scissors!")
                humanScore++;
            } else {
                console.log("You lose! Paper beats rock!")
                computerScore++;
            }
        } else if (human == "paper") {
            if (computer == "rock") {
                console.log("You win! Paper beats rock!")
                humanScore++;
            } else {
                console.log("You lose! Scissors beats paper!")
                computerScore++;
            }
        } else if (human == "scissors") {
            if (computer == "paper") {
                console.log("You win! Scissors beats paper!")
                humanScore++;
            } else {
                console.log("You lose! Rock beats scissors!")
                computerScore++;
            }
        }
    }

    function displayScore() {
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }

    playRound(getHumanChoice(), getComputerChoice());
    displayScore();
    playRound(getHumanChoice(), getComputerChoice());
    displayScore();
    playRound(getHumanChoice(), getComputerChoice());
    displayScore();
    playRound(getHumanChoice(), getComputerChoice());
    displayScore();
    playRound(getHumanChoice(), getComputerChoice());
    displayScore();

}

playGame();