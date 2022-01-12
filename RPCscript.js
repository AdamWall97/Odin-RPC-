
function game(ps){
var wins = 0;
var loss = 0;
var ties = 0;
var result = ""
let computerSelection = computerPlay();
for(let i = 0; i < 15;i++){
    result = playRound(ps,computerSelection)
    if(result.includes("Win")){
        wins = wins + 1;
    }
    if(result.includes("Lose")){
        loss = loss + 1;
    }
    if(result.includes("Tie")){
        ties = ties + 1;
    }
    
    computerSelection = computerPlay();

}

return "Your record is: "+wins+"-"+loss+"-"+ties;
}


function playRound(playerSelection, computerSelection){
//tie
if (playerSelection == computerSelection){
    return "Tie! Both chose " + playerSelection
}

    //Rock games
    if (playerSelection == "rock"){
        if (computerSelection == "paper")
        {
            return "You Lose! " + computerSelection+ " beats "+ playerSelection;
        }
        if (computerSelection == "scissors")
        {
            return "You Win! " + playerSelection+ " beats "+ computerSelection;
        }
    }
    //Paper Games
    if (playerSelection == "paper"){
        if (computerSelection == "scissors")
        {
            return "You Lose! " + computerSelection+ " beats "+ playerSelection;
        }
        if (computerSelection == "rock")
        {
            return "You Win! " + playerSelection+ " beats "+ computerSelection;
        }
    }
    //Scissor Games
    if (playerSelection == "scissors"){
        if (computerSelection == "rock")
        {
            return "You Lose! " + computerSelection+ " beats "+ playerSelection;
        }
        if (computerSelection == "paper")
        {
            return "You Win! " + playerSelection+ " beats "+ computerSelection;
        }
    }
return 0;

}

function getRandomInt(max){
return Math.floor(Math.random() * max);
}

function computerPlay(){
    let val =  getRandomInt(3);

    if (val == 0){
        return "rock";
    }
    if (val == 1){
        return "paper"
    }
    else{
        return "scissors";
    }

}

//log game
const playerSelection = window.prompt("Rock, Paper, Scissors!");
console.log(game(playerSelection));