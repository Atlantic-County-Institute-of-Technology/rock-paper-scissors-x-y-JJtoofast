//Jason Adair
//4.02.25
// ROCK PAPER SCISSORS PROJECT
// created 3.28.25
//script.js
// ROCK PAPER SCISSORS

const choices = ["rock", "paper", "scissors", "Mr_C", "ruler"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const reset_button = document.getElementById('reset-btn');
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

reset_button.addEventListener('click', () => {
    console.log("Reset button clicked.");
    reset_game();
})

  /* this will displayed the score, or starting score and final score and the final score of the game and will comprare player's selected item compared to the cpu's  */
//
function playGame(playerChoice) {
    

    
    const computerChoice = choices[Math.floor(Math.random() * 5)]; // numbers of choices that you have to play against the AI who will think of something that wikk beat it. 
    let result = ""; 

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!"
    } 
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors" ) ? "YOU WIN" : "YOU Lose";
                break;  /* this will displayed what you or the cpu has picked to play against each other   */
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
             

    }  /* this will displayed if you had won or lose depending on the text color and if you won or the computer has */

    
} 

// function to reset the UI and all associated values
function reset_game() {
    // reset the scores to zero
    player_score_val = 0;
    computer_score_val = 0;
}
