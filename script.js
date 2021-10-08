let playerCounter = 0;
let computerCounter = 0;

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

function playRound(playerSelection, computerSelection = computerPlay()) {

    if (playerSelection === computerSelection) {
        return `It's a tie. CURRENT: ${playerCounter} : ${computerCounter}`;
    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS")
        || (playerSelection === "PAPER" && computerSelection === "ROCK")
        || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        playerCounter++;
        return `You WON! ${playerSelection} beats ${computerSelection}. CURRENT: ${playerCounter} : ${computerCounter}`;
    } else if ((computerSelection === "ROCK" && playerSelection === "SCISSORS")
        || (computerSelection === "PAPER" && playerSelection === "ROCK")
        || (computerSelection === "SCISSORS" && playerSelection === "PAPER")) {
        computerCounter++;
        return `You LOST! ${computerSelection} beats ${playerSelection} CURRENT: ${playerCounter} : ${computerCounter}`;
    }
}


// event listener
window.addEventListener('click', keyAction);

const result = document.querySelector('div.result');

function keyAction(e) {
    const pressedKeyValue = e.target.value;
    if (!pressedKeyValue) return;

    if (computerCounter === 5 || playerCounter === 5) {
        const newPara = document.createElement('div');
        newPara.textContent = computerCounter > playerCounter ? "YOU LOST THIS GAME" : "YOU WON THIS GAME!!!";
        result.appendChild(newPara);
        //add button here
        const restartButton = document.createElement('button');
        restartButton.textContent = 'Restart';
        restartButton.id = 'restart'
        result.appendChild(restartButton);
        const restartBtn = document.getElementById('restart');
        restartBtn.addEventListener('click', restartGame);
    } else {
        const newPara = document.createElement('div');
        newPara.textContent = playRound(pressedKeyValue);
        result.appendChild(newPara);
    }

}

function restartGame(e) {
    result.textContent = '';
    playerCounter = 0;
    computerCounter = 0;
}

