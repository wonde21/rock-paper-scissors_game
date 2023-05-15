const btn = document.querySelector("button");

const msg = document.querySelector(".result h2");
const posibility =["rock", "scissors","paper"];
var playerIndex ;
// var playerChoice;
// console.log(playerChoice + " upper");

btn.addEventListener('click',function(){
    const playerChoice = document.querySelector("#lucky").value.toLowerCase();
    
    playerIndex = posibility.indexOf(`${playerChoice}`);
        
    
var computer_random = Math.floor(Math.random()*3);
// var playerIndex =posibility.indexOf(playerChoice);

if(computer_random+1 == playerIndex || computer_random == playerIndex+1 ||(computer_random == 0 && playerIndex == 2) || (computer_random == 2 && playerIndex == 0)){
        if(computer_random + 1 == playerIndex){
            msg.innerText="you win!";
            btn.style.backgroundColor = "green";
        }
        else if(computer_random == playerIndex + 1){
            msg.innerText="you lose!";
            btn.style.backgroundColor = "red";
        }else if (computer_random + 2 == playerIndex){
            msg.innerText = "you lose!";
            btn.style.backgroundColor = "red";
        }else if(computer_random ==playerIndex + 2){
            msg.innerText = "you win!";
            btn.style.backgroundColor = "green";
        }
        
    }else if(playerIndex === -1){
    msg.innerText = "INCORRECT CHOICE please Try Again!" + playerChoice;
    }else{
    msg.innerText ="Try Again!" +playerChoice +playerIndex + computer_random;
    }
});
