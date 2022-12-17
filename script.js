let playerWin = 0;
let playerLose = 0;

function playGame(playerSelect) {
    const compSelect = computerSelection();
    const rpsResult = checkWinner(playerSelect, compSelect);
    
    if (rpsResult === "You win!") {
        playerWin++;
    } else if (rpsResult === "You Lose!") {
        playerLose++;
    }
    
    displayResultOfCheckWinner(rpsResult);
    displayUpdatedWinRecord(playerWin);
    displayUpdatedLossRecord(playerLose);
}

document.getElementById("rock").addEventListener('click', () => {
    playGame("ROCK");
});

document.getElementById("paper").addEventListener('click', () => {
   playGame("PAPER")
});

document.getElementById("scissors").addEventListener('click', () => {
    playGame("SCISSORS")
});

function displayResultOfCheckWinner(result) {
    const message = document.getElementById("message-container");
    message.innerText = result;
}

function displayUpdatedWinRecord(updatedWinCount) {
    const winScoreContainer = document.getElementById("win-score");
    winScoreContainer.innerText = updatedWinCount;
}

function displayUpdatedLossRecord(updatedLossCount) {
    const loseScoreContainer = document.getElementById("lose-score");
    loseScoreContainer.innerText = updatedLossCount;
}

function computerSelection() {
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    let selection = choices[Math.floor(Math.random()*choices.length)];
    return selection;
}

function checkWinner(playerSelect, compSelect) {
    if (playerSelect === compSelect) {
        return "It's a Draw!";
    } else if (compSelect === "ROCK") {
        return (playerSelect === "PAPER") ? "You win!" : "You Lose!"
    } else if (compSelect === "PAPER") {
        return (playerSelect === "SCISSORS") ? "You win!" : "You Lose!"
    } else if (compSelect === "SCISSORS") {
        return (playerSelect === "ROCK") ? "You win!" : "You Lose!"
    }
}