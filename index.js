const playerText=document.querySelector("#playerText");
const computerText=document.querySelector("#computerText");
const resultText=document.querySelector("#resultText");
const choicebtns=document.querySelectorAll(".choicebtn");

let player;
let computer;
let result;

choicebtns.forEach(button => button.addEventListener("click", () =>{
    player = button.textContent;
    computerTurn();
    playerText.textContent=`Player: ${player}`;
    computerText.textContent=`Computer: ${computer}`;
    resultText.textContent=checkWinner();

}))

function computerTurn(){
    const randomNumber=Math.floor((Math.random() * 3 ) + 1);

    switch(randomNumber){
        case 1:
            computer="Rock";
            break;
        case 2:
            computer="Paper";
            break;
        case 3:
            computer="Scissor";
            break;

    }
}

function checkWinner(){
    if(player==computer){
        return "Draw!";
    }
    else if(computer=="Rock"){
        return (player=="Paper") ? "You Win!" : "You Lose!";
    }
    else if(computer=="Paper"){
        return (player=="Scissor") ? "You Win!" : "You Lose!";
    }
    else if(computer=="Scissor"){
        return (player=="Rock") ? "You Win!" : "You Lose!";
    }
}