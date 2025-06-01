function getComputerChoice() {
    let randChoice = Math.floor(Math.random() * 3)

    switch (randChoice) {
        case 0:
            return "rock"
            break
        case 1:
            return "paper"
            break
        case 2:
            return "scissors"
            break
        default:
            return "scissors"
    }
}

console.log(getComputerChoice());