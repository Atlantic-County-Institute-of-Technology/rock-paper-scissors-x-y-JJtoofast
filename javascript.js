// ROCK PAPER SCISSORS

const choices = ["rock", "paper", "scissors", "Mr_C", "ruler"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

  

function playGame(playerChoice) {
    
    const computerChoice = choices[Math.floor(Math.random() * 5)];
    let result = ""; 

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!"
    } 
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors" ) ? "YOU WIN" : "YOU Lose";
                break;
            case "paper":
                result = (computerChoice === "rock" || computerChoice === "Mr_C" || computerChoice === "ruler") ? "YOU WIN" : "YOU Lose";
                break;
             case "scissors":
                result = (computerChoice === "paper" || computerChoice === "ruler") ? "YOU WIN" : "YOU Lose";
                break;
            case "Mr_C":
                 result = (computerChoice === "rock" || computerChoice === "paper" || computerChoice === "scissors" || computerChoice === "ruler") ? "YOU WIN" : "YOU Lose" ;
                break;
                case "ruler":
                    result = (computerChoice === "Mr_C") ? "YOU WIN" : "YOU Lose";
                    break;
         }
} 
    playerDisplay.textContent = `PLAYER: ${playerChoice}` ;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}` ;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText","redText")


    switch(result){
        case "YOU WIN":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU Lose":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
             break;
    }

}
