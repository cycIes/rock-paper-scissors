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

        let results = document.querySelector("#results");

        if (human == computer) {
            results.textContent = "It's a draw!";
        } else if (human == "rock") {
            if (computer == "scissors") {
                results.textContent = "You win! Rock beats scissors!";
                humanScore++;
            } else {
                results.textContent = "You lose! Paper beats rock!";
                computerScore++;
            }
        } else if (human == "paper") {
            if (computer == "rock") {
                results.textContent = "You win! Paper beats rock!";
                humanScore++;
            } else {
                results.textContent = "You lose! Scissors beats paper!";
                computerScore++;
            }
        } else if (human == "scissors") {
            if (computer == "paper") {
                results.textContent = "You win! Scissors beats paper!";
                humanScore++;
            } else {
                results.textContent = "You lose! Rock beats scissors!";
                computerScore++;
            }
        }
    }

    function displayScore() {
        let humanScoreDisplay = document.querySelector("#humanScore");
        let computerScoreDisplay = document.querySelector("#computerScore");
        humanScoreDisplay.textContent = `Your score: ${humanScore}`;
        computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
    }

    function endGame(humanScore, computerScore) {
        if (humanScore > computerScore) {
            results.textContent = "You won! Congratulations!"
        } else if (computerScore > humanScore) {
            results.textContent = "You lost to the computer :(";
        } else {
            results.textContent = "Wow...it's a draw!";
        }
    }

    let choices = document.querySelector("#choices");

    choices.addEventListener("click", (event) => {
        switch(event.target.className) {
            case "rock":
                playRound("rock", getComputerChoice());
                break;
            case "paper":
                playRound("paper", getComputerChoice());
                break;
            case "scissors":
                playRound("scissors", getComputerChoice());
                break;
        }
        displayScore();
        if (humanScore >= 5 || computerScore >= 5) {
            endGame(humanScore, computerScore);
        }
    });
}

playGame();