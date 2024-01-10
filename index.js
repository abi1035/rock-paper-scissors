let computerPoint=0;
let playerPoint=0; 

let gameHasWon=false;

// Keeping Score
function gameStart(){
if(computerPoint===5 || playerPoint===5){
    gameHasWon=true;
    if(playerPoint>computerPoint){
        console.log("The player has won, we'll get them next time")
    }else{
        console.log("The Machines have won")
    }
}else{
    while(gameHasWon===false){
    wholeGame();
    console.log(`Computer: ${computerPoint}`);
    console.log(`Player: ${playerPoint}`)
    gameStart();
    }
}
}




// Looping over function
function wholeGame(){
// COMPUTER CHOICE
let choice=["Rock","Paper","Scissors"];
let randomChoice=Math.floor(Math.random()*3);
let computerChoice=choice[randomChoice];

// PLAYER CHOICE
let player=prompt("Rock, Paper or Scissors ?");
let playerChoice=capitalizeFirstLetter(player);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(playerChoice);
console.log(computerChoice);

// The game logic

// Rock
if(computerChoice==="Rock" && playerChoice==="Paper"){
    console.log("Player has won")
    return playerPoint++

}else if(computerChoice==="Rock" && playerChoice==="Scissors"){
    console.log("The machines have won")
    return computerPoint++
}

// Paper
else if(computerChoice==="Paper" && playerChoice==="Rock"){
    console.log("The machines have won!");
    return computerPoint++

}else if(computerChoice==="Paper" && playerChoice==="Scissors"){
    console.log("Player has won!");
    return playerPoint++

}

// Scissors
else if(computerChoice==="Scissors" && playerChoice==="Rock"){
    console.log("Player has won")
    return playerPoint++

}else if(computerChoice==="Scissors" && playerChoice==="Paper"){
    console.log("The machines have won!")
    return computerPoint++

}
// Tie
else if(computerChoice===playerChoice){
    console.log("It is a tie")
} else{
    console.log("invalid input! learn to play the game!")
}
}

