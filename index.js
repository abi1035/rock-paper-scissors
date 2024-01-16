let computerPoint=0;
let playerPoint=0; 
let gameHasWon=false;

// Adding buttons
function buttonClick(e){
    console.log(e.currentTarget.value)
    let eventClicked=e.currentTarget.value
    wholeGame(eventClicked);
    gameStart();
}

function resetGame(){
    gameHasWon=false;
    computerPoint=0;
    playerPoint=0;
    document.getElementById("header").innerHTML="Welcome to Rock Paper and Scissors"
    document.getElementById("Rock").disabled = false;
    document.getElementById("Paper").disabled = false;
    document.getElementById("Scissors").disabled = false;
    document.getElementById("whoWon").innerHTML=`Score 5 points to win!!`
    document.getElementById("computerImg").innerHTML=`Comp Ready`
    document.getElementById("playerImg").innerHTML=`Player Ready`
    document.getElementById("playerScore").innerHTML = ` <img src="./images/playerWhite.png" alt="Player" height="50px" width="50px">: ${playerPoint}`
    document.getElementById("computerScore").innerHTML = ` ${computerPoint}: <img src="./images/computerWhite.png" alt="Computer" height="60px" width="60px">`
}


// Keeping Score
function gameStart(){
if(computerPoint===5 || playerPoint===5){
    gameHasWon=true;
    document.getElementById("Rock").disabled = true;
    document.getElementById("Paper").disabled = true;
    document.getElementById("Scissors").disabled = true;
    document.getElementById("playerScore").innerHTML = `<img src="./images/playerWhite.png" alt="Player" height="50px" width="50px">: ${playerPoint}`
    document.getElementById("computerScore").innerHTML = `${computerPoint} :<img src="./images/computerWhite.png" alt="Computer" height="60px" width="60px">`



    if(playerPoint>computerPoint){
        document.getElementById("header").innerHTML=`<img src="./images/humanVictory.png" alt="humanVictory" height="100px" width="100px">`
        document.getElementById("whoWon").innerHTML=`The Player Wins`
    }else{
        document.getElementById("header").innerHTML=`<img src="./images/ComputerVictory.png" alt="ComputerVictory" height="100px" width="100px">`
        document.getElementById("whoWon").innerHTML=`The Computer Wins`
    }
}else{
    document.getElementById("playerScore").innerHTML = `<img src="./images/playerWhite.png" alt="Player" height="50px" width="50px">: ${playerPoint}`
    document.getElementById("computerScore").innerHTML = `${computerPoint}: <img src="./images/computerWhite.png" alt="Computer" height="60px" width="60px">`
}
}




// Looping over function
function wholeGame(buttonClick){
// gameStart()
// COMPUTER CHOICE
let choice=["Rock","Paper","Scissors"];
let randomChoice=Math.floor(Math.random()*3);
let computerChoice=choice[randomChoice];
document.getElementById("computerImg").innerHTML=`<img src="./images/${computerChoice}.png" alt="PlayerChoice" height="70px" width="70px">`


// PLAYER CHOICE
let playerChoice=buttonClick;
document.getElementById("playerImg").innerHTML=`<img src="./images/${playerChoice}.png" alt="PlayerChoice" height="70px" width="70px">`

// console.log(playerChoice);
// console.log(computerChoice);

// The game logic

// Rock
if(computerChoice==="Rock" && playerChoice==="Paper"){
    document.getElementById("whoWon").innerHTML= "Player has won a point"
    return playerPoint++ 

}else if(computerChoice==="Rock" && playerChoice==="Scissors"){
    document.getElementById("whoWon").innerHTML= "Computer has won a point"
    return computerPoint++
}

// Paper
else if(computerChoice==="Paper" && playerChoice==="Rock"){
    document.getElementById("whoWon").innerHTML= "Computer has won a point"
    return computerPoint++

}else if(computerChoice==="Paper" && playerChoice==="Scissors"){
    document.getElementById("whoWon").innerHTML= "Player has won a point"
    return playerPoint++

}

// Scissors
else if(computerChoice==="Scissors" && playerChoice==="Rock"){
    document.getElementById("whoWon").innerHTML= "Player has won a point"
    return playerPoint++

}else if(computerChoice==="Scissors" && playerChoice==="Paper"){
    document.getElementById("whoWon").innerHTML= "Computer has won a point"
    return computerPoint++
}

// Tie
else if(computerChoice===playerChoice){
    document.getElementById("whoWon").innerHTML= "It's a tie"
    
} else{
    document.getElementById("whoWon").innerHTML= "invalid input! learn to play the game!"
    
}

}

