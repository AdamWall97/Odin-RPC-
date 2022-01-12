
/*function game(ps){
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
}*/


let wins = 0;
let loss = 0;
let ties = 0;

function playRound(e,playerSelection, computerSelection){
//tie
if (playerSelection == computerSelection){
    ties = ties + 1 
}

    //Rock games
    if (playerSelection == "rock"){
        if (computerSelection == "paper")
        {
            loss = loss + 1;
            // console.log( "You Lose! " + computerSelection+ " beats "+ playerSelection);
        }
        if (computerSelection == "scissors")
        {
            wins = wins + 1;
            //console.log("You Win! " + playerSelection+ " beats "+ computerSelection);
        }
    }
    //Paper Games
    if (playerSelection == "paper"){
        if (computerSelection == "scissors")
        {
            loss = loss + 1;
            //return "You Lose! " + computerSelection+ " beats "+ playerSelection;
        }
        if (computerSelection == "rock")
        {
            wins = wins + 1;
            //return "You Win! " + playerSelection+ " beats "+ computerSelection;
        }
    }
    //Scissor Games
    if (playerSelection == "scissors"){
        if (computerSelection == "rock")
        {
            loss = loss + 1;
            //return "You Lose! " + computerSelection+ " beats "+ playerSelection;
        }
        if (computerSelection == "paper")
        {
            wins = wins + 1;
            //return "You Win! " + playerSelection+ " beats "+ computerSelection;
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




function Userinput(sty){
    alert(sty);
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scis = document.querySelector('#scis');






const container = document.querySelector('#container')

const content = document.createElement('div');

content.classList.add('content');
content.textContent = "Your Record is: ";

container.appendChild(content);

rock.addEventListener('click', function (e) {
    playRound(e,'rock',computerPlay());
content.textContent = "Your Record is: " + wins + "-" + loss + "-" + ties;
    container.appendChild(content);
});


paper.addEventListener('click', function (e) {
    playRound(e,'paper',computerPlay());
    content.textContent = "Your Record is: " + wins + "-" + loss + "-" + ties;
    container.appendChild(content);
});


scis.addEventListener('click', function (e) {
    playRound(e,'scissors',computerPlay());
    content.textContent = "Your Record is: " + wins + "-" + loss + "-" + ties;
    container.appendChild(content);
});



//paper.addEventListener('click', playRound("paper", computerPlay()));

//scis.addEventListener('click', console.log(playRound("scissors", computerPlay())));

//log game
//const playerSelection = window.prompt("Rock, Paper, Scissors!");



