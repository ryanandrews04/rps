const rock = document.createElement('button');
rock.classList.add('rock');
rock.innerText = "Rock";
rock.addEventListener('click',() => { playRound(computerPlay(), 'rock') });
document.body.appendChild(rock);

const paper = document.createElement('button');
paper.classList.add('paper');
paper.innerText = "Paper";
paper.addEventListener('click', () => {playRound(computerPlay(), 'paper')});
document.body.appendChild(paper);

const scissors = document.createElement('button');
scissors.classList.add('scissors');
scissors.innerText = "Scissors";
scissors.addEventListener('click', () => {playRound(computerPlay(), 'scissors')});
document.body.appendChild(scissors);

const resultDiv = document.createElement('div');
resultDiv.classList.add('resultDiv');
document.body.appendChild(resultDiv);

const result = document.createElement('p');
result.classList.add('result');
resultDiv.appendChild(result);

const score = document.createElement('p');
score.classList.add('score');
resultDiv.appendChild(score);

const final = document.createElement('p');
final.classList.add('final');
resultDiv.appendChild(final);


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

let playerWins = 0;
let computerWins = 0;
let gameCount = 0;

function playRound(computerChoice, playerChoice){
    playerChoice = playerChoice.toLowerCase();
    score.innerText = `Score:\n Player ${playerWins}\n Computer ${computerWins}`
    
    while (playerWins < 5 && computerWins < 5 && gameCount < 10){

    gameCount++

    if (playerChoice === computerChoice){
        result.innerText = "It's a tie";
        return "It's a tie";
    }

    if (playerChoice === "rock"){
        if (computerChoice === "scissors"){
            result.innerText = "You win! Rock beats scissors";
            playerWins++
            return "You win! Rock beats scissors";
        } else if (computerChoice === "paper"){
            result.innerText = "You lose! Paper beats rock";
            computerWins++
           
            return "You lose! Paper beats rock";
        }
    }

    if (playerChoice === "paper"){
        if (computerChoice === "rock"){
            result.innerText = "You win! Paper beats rock";
            playerWins++
            
            return "You win! Paper beats rock";
        } else if (computerChoice === "scissors"){
            result.innerText = "You lose! Scissors beats paper";
            computerWins++
            
            return "You lose! Scissors beats paper";
        }
    }

    if (playerChoice === "scissors"){
        if (computerChoice === "paper"){
            result.innerText = "You win! Scissors beats paper";
            playerWins++
            
            return "You win! Scissors beats paper";
        } else if (computerChoice === "rock"){
            result.innerText = "You lose! Rock beats scissors";
            computerWins++
            
            return "You lose! Rock beats scissors";
        }
    }

    if (playerWins > computerWins) {
        return final.innerText = "You win overall!";
    } else if (computerWins > playerWins){
        return final.innerText = "You lose overall :(";
    } else {
        return final.innerText = "It's a tie overall";
    }
    
}
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    let gameCount = 1;
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
    

    if (playerWins > computerWins) {
        
        return "You win overall!";
    } else if (computerWins > playerWins) {
        
        return "You lose overall!";
    } else {
        
        return "It was an overall tie!";
    }

    
}







