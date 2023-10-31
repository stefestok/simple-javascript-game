//zakladne premenne
var totalScore, roundScore, activePlayer, dice; 
var playGame = Boolean

newStart();

function newStart() {
totalScore = [0,0];
roundScore = 0;
activePlayer = 0;
playGame = true;

// vynulovanie a odstranenie kocky
document.getElementById("totalScorePlayer-0").textContent = 0;
document.getElementById("totalScorePlayer-1").textContent = 0;
document.getElementById("currentScore-0").textContent = 0;
document.getElementById("currentScore-1").textContent = 0;

//reset kocky
document.querySelector(".diceImage").style.display = "none"

// text do povodneho stavu
document.querySelector("#name-0").textContent = "skore 1. hráča";
document.querySelector("#name-1").textContent = "skore 2. hráča";

// poradie aktivneho hraca na prveho
document.querySelector(".totalScore0").classList.add("active");
document.querySelector(".totalScore1").classList.remove("active");

}





document.querySelector(".rollDice").addEventListener("click", function(){
    if(playGame){
        
        //1. generujeme nahodne cislo medzi 1 a 6
    var dice = Math.ceil(Math.random()*6)

    //2. zobrazit spravny obrazok
    var diceElement = document.querySelector(".diceImage");
    diceElement.style.display = "block";
    console.log(diceElement.src = "images/" + dice + ".jpg");

    //3. nacitavame cisla z kocky
    if (dice !==1){
        roundScore = roundScore + dice;
    document.getElementById("currentScore-" + activePlayer).textContent = roundScore;
    }else {
        //bude hrat dalsi hrac
       nextPlayer();
    }

    }

    

});

function nextPlayer(){
    if(activePlayer === 0){
        activePlayer = 1;
    }else{
        activePlayer = 0;
    }
    roundScore = 0;

    document.getElementById("currentScore-0").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;

    document.querySelector(".diceImage").style.display = "none"

    document.querySelector(".totalScore0").classList.toggle("active");
    document.querySelector(".totalScore1").classList.toggle("active");

}

document.querySelector(".holdScore").addEventListener("click", function(){
    if(playGame){
        // celkove skore sa vyplni sucasnym skore
    totalScore[activePlayer] = totalScore[activePlayer] + roundScore;

    document.querySelector("#totalScorePlayer-" + activePlayer).textContent =
     totalScore[activePlayer];

     if(totalScore[activePlayer] >= 30){
        document.querySelector("#name-" + activePlayer).textContent = "Víťaz wuaaaaaa";
        document.querySelector(".diceImage").style.display = "none"
        playGame = false;
     } else{
        nextPlayer();
     }

    }

    
     
});

//novy start
document.querySelector(".newGame").addEventListener("click", newStart);