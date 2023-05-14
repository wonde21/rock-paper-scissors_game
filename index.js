const userChoice = document.querySelector("#player").value;


document.getElementsByTagName("form").onsubmit = function(){
    document.querySelector(".result h2").innerHTML = "usd";
    
}

function computer(){
    let playerChoice =["Rock","paper", "scissors"];
    let randIndex = Math.floor(Math.random()*3);

    return playerChoice[randIndex];

}

