'use strict';
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent="Correct Number!";
// document.querySelector(".message").textContent;

// document.querySelector(".number").textContent=13;
// document.querySelector(".score").textContent="10";
// console.log(document.querySelector(".guess").value=23);
// document.querySelector(".guess").value;

let sectretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;

document.querySelector(".check").addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);

    //when there is no input
    if(!guess){
        document.querySelector(".message").textContent="No number!";
        //when the player wins
    }else if(guess===sectretNumber){
        document.querySelector(".message").textContent="Correct Number!";
        document.querySelector(".number").textContent=sectretNumber;
    document.querySelector("body").style.backgroundColor="#60b347";
    document.querySelector(".number").style.width="30rem";
    if(score>highScore){
        highScore=score;
        document.querySelector(".highscore").textContent=highScore;
    }
//when guess is too high
    }else if(guess>sectretNumber){
        if(score>1){
            document.querySelector(".message").textContent="Too High Guess";
            score--;
        document.querySelector(".score").textContent=score;
        }else{
            document.querySelector(".message").textContent="You lost the game";
            document.querySelector(".score").textContent=0;
        };
        
        //when guess is too low
    }else if(guess<sectretNumber){
        if(score>1){
            document.querySelector(".message").textContent="Too Low Guess";
            // document.querySelector(".message").style.backgroundColor="red";
            score--;
        document.querySelector(".score").textContent=score;
        }else{
            document.querySelector(".message").textContent="You lost the game";
            document.querySelector(".score").textContent=0;
        };
        
    }
})
document.querySelector(".again").addEventListener("click",function(){
    score=20;
    sectretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector(".message").textContent="start Guessing";
    document.querySelector(".score").textContent=score;
    document.querySelector(".number").textContent="?";
    document.querySelector(".guess").value="";


    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".number").style.width="15rem";


})