function computerPlay() {
    let choice = Math.floor(Math.random() * 3) + 1
    if (choice === 1){
        return "rock";
    } else if (choice === 2){
        return "paper";
    } else {
        return "scissors";
    }
}



function playRound(computerChoice, playerChoice){
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice === computerChoice){
        return "It's a tie";
    }

    if (playerChoice === "rock"){
        if (computerChoice === "scissors"){
            return "You win! Rock beats scissors";
        } else if (computerChoice === "paper"){
            return "You lose! Paper beats rock";
        }
    }

    if (playerChoice === "paper"){
        if (computerChoice === "rock"){
            return "You win! Paper beats rock";
        } else if (computerChoice === "scissors"){
            return "You lose! Scissors beats paper";
        }
    }

    if (playerChoice === "scissors"){
        if (computerChoice === "paper"){
            return "You win! Scissors beats paper";
        } else if (computerChoice === "rock"){
            return "You lose! Rock beats scissors";
        }
    }
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    let gameCount = 1;
    for (i = 0; i <= 4; i++) {
        console.log(`Game ${gameCount}`);
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let computerSelection = computerPlay();
        let result = playRound(computerSelection, playerSelection);
        if (result === "You win! Rock beats scissors" || result === "You win! Paper beats rock" || result === "You win! Scissors beats paper"){
            playerWins++;
            console.log("You win a round!");
            console.log(`Score: Player ${playerWins}, Computer ${computerWins}`)
        } else if (result === "You lose! Paper beats rock" || result === "You lose! Scissors beats paper" || result === "You lose! Rock beats scissors"){
            computerWins++;
            console.log("You lose a round");
            console.log(`Score: Player ${playerWins}, Computer ${computerWins}`)
        } else {
            console.log("Tie, no points awarded");
            console.log(`Score: Player ${playerWins}, Computer ${computerWins}`);
        }
        gameCount++;
    }

    if (playerWins > computerWins) {
        
        return "You win overall!";
    } else if (computerWins > playerWins) {
        
        return "You lose overall!";
    } else {
        
        return "It was an overall tie!";
    }

    
}

console.log(game());


