let playerCounter = 0;
let computerCounter = 0;


function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    switch (randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let r = 'rock';
    let p = 'paper';
    let s = 'scissors';
    if (playerSelection === computerSelection) {
        return `It's a tie`;
    } else if ((playerSelection === r && computerSelection === s)
        || (playerSelection === p && computerSelection === r)
        || (playerSelection === s && computerSelection === p)) {
        playerCounter++;
        return `You WON the round`;
    } else if ((computerSelection === r && playerSelection === s)
        || (computerSelection === p && playerSelection === r)
        || (computerSelection === s && playerSelection === p)) {
        computerCounter++;
        return `You LOST the round`;
    }
}

const buttons = Array.from(document.querySelectorAll('button'));
const divWithResult = document.querySelector('.results');
const divWIthScore = document.querySelector('.score');

window.addEventListener('click', playGameRound);
buttons.forEach(button => button.addEventListener('transitionend', stopTransition));

function playGameRound(e) {
    const buttonClicked = e.target;
    const buttonValuePlayerClicked = e.target.value;

    if (!buttonValuePlayerClicked) return;

    buttonClicked.classList.add('playing');
    const resultOfTheRound = playRound(buttonValuePlayerClicked, computerPlay());
    if (!resultOfTheRound) return;
    divWithResult.textContent = `${resultOfTheRound}`;
    divWIthScore.textContent = `SCORE: ${playerCounter} : ${computerCounter}`

    if (computerCounter === 3 || playerCounter === 3) {
        endGame();
    }
}

function endGame() {
    if (playerCounter > computerCounter) {
        divWithResult.classList.add('winner');
        divWithResult.textContent = `You WON the game with SCORE ${playerCounter} : ${computerCounter}`;
        restartButtonPlaceHolder.appendChild(restartButton);
    } else {
        divWithResult.classList.add('looser');
        divWithResult.textContent = `You LOST the game with SCORE ${playerCounter} : ${computerCounter}`;
        restartButtonPlaceHolder.appendChild(restartButton);
    }
}

function stopTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function restartGame(e) {
    if (e.target.value !== 'restart') {
        return;
    }
    playerCounter = 0;
    computerCounter = 0;
    divWithResult.textContent = "Welcome to the new beginnings";
    restartButtonPlaceHolder.removeChild(restartButton);
    divWithResult.classList.remove('winner');
    divWithResult.classList.remove('looser');
}

const restartButtonPlaceHolder = document.querySelector('.for-restart-button');
const restartButton = document.createElement('button');

restartButton.classList.add('restart-button')
restartButton.value = 'restart';
restartButton.textContent = "Restart";
restartButton.addEventListener('click', restartGame);
