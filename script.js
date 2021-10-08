let playerCounter = 0;
let computerCounter = 0;
let roundWinner = "";

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    switch (randomNumber) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS")
        || (playerSelection === "PAPER" && computerSelection === "ROCK")
        || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        roundWinner = 'player';
        return `You WON! ${playerSelection} beats ${computerSelection}`;
    } else if ((computerSelection === "ROCK" && playerSelection === "SCISSORS")
        || (computerSelection === "PAPER" && playerSelection === "ROCK")
        || (computerSelection === "SCISSORS" && playerSelection === "PAPER")) {
        roundWinner = 'computer';
        return `You LOST! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerInputToUpperCase = prompt("take a turn", 'rock/paper/scissors').toUpperCase();

        console.log(playRound(playerInputToUpperCase, computerPlay()));

        if (roundWinner === 'player') {
            playerCounter++;
        } else if (roundWinner === 'computer') {
            computerCounter++;
        }
    }

    console.log(playerCounter > computerCounter ? "YOU WON THE GAME!" : playerCounter === computerCounter ?
        "It's a tie game" : "YOU LOST THE GAME!");
}