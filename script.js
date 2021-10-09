function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    // console.log(randomNumber);
    switch (randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

let playerCounter = 0;
let computerCounter = 0;

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

/*  if (playerCounter > computerCounter) {
      return `You WON the game with SCORE: ${playerCounter} : ${computerCounter}`;
  } else {
      return `You LOST the game with SCORE: ${playerCounter} : ${computerCounter}`;
  }*/
window.addEventListener('click', playGameRound);
const buttons = Array.from(document.querySelectorAll('.game-button'));
// console.log(buttons)
buttons.forEach(button => button.addEventListener('transitionend', stopTransition));

const divWithResult = document.querySelector('.results');



function playGameRound(e) {
    const buttonClicked = e.target;
    const buttonValuePlayerClicked = e.target.value;

    if (!buttonValuePlayerClicked) return;

    buttonClicked.classList.add('playing');
    const resultOfTheRound = playRound(buttonValuePlayerClicked, computerPlay());

    divWithResult.textContent = `${resultOfTheRound} ------- Current SCORE: ${playerCounter} : ${computerCounter}`;

    if (computerCounter === 3 || playerCounter === 3) {
        endGame();
    }
}


function endGame() {
    if (playerCounter > computerCounter) {
        divWithResult.classList.add('winner');
        divWithResult.textContent = `You WON the game with SCORE ${playerCounter} : ${computerCounter}`;
        forRestartButtonPlaceHolder.appendChild(restartButton);
    } else {
        divWithResult.classList.add('looser');
        divWithResult.textContent = `You LOST the game with SCORE ${playerCounter} : ${computerCounter}`;
        forRestartButtonPlaceHolder.appendChild(restartButton);
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
    forRestartButtonPlaceHolder.removeChild(restartButton);
    divWithResult.classList.remove('winner');
    divWithResult.classList.remove('looser');
}
const center = document.querySelector('.center');

/// restart button
const forRestartButtonPlaceHolder = document.querySelector('.for-restart-button');
const restartButton = document.createElement('button');
restartButton.classList.add('restart-button')
restartButton.value = 'restart';
restartButton.textContent = "Restart";
restartButton.addEventListener('click',restartGame);
