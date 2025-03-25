// ROCK PAPER SCISSORS

const choices = ["rock", "paper", "scissors", "Mr_C" , "Ruler"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

  

function playGame(playerChoice) {
    
    const computerChoice = choices[Math.floor(Math.random() * 4)];
    let result = ""; 

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!"
    } 
    else{
        switch(playerChoice){
            case "rock" :
                result = (computerChoice === "scissors" ) ? "YOU WIN" : "You Lose:(";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU Lose:(";
                break;
             case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU Lose:(" ;
                break;
                case "Mr_C":
                    result = (computerChoice === "rock") ? "YOU WIN" : "YOU Lose:(" ;
                    break;
         }
} 
    playerDisplay.textContent = `PLAYER: ${playerChoice}` ;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}` ;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText","redText")


    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
             break;
    }

}
