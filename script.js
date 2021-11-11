
let wins = 0;
let draws = 0;
let losses = 0;

var reverbFart = new Audio("images/Reverb-Fart.mp3");


const rock = 
[["Draw!", "tie"],
["Paper covers the Rock!", "lose"],
["The Rock crushes scissors!", "win"],
["The Rock crushes lizard!", "win"],
["Spock vaporizes The Rock!", "lose"]];

const paper =
[["Paper covers The Rock!", "win"],
["Draw!", "tie"],
["Scissors cuts paper!", "lose"],
["Lizard eats paper!", "lose"],
["Paper disproves Spock!", "win"]];

const scissors =
[["The Rock crushes scissors!", "lose"],
["Scissors cut paper!", "win"],
["Draw!", "tie"],
["Scissors decapitate lizard!", "win"],
["Spock smashes scissors!", "lose"]];

const lizard = 
[["The Rock crushes lizard!", "lose"],
["Lizard eats paper!", "win"],
["Scissors decapitate lizard!", "lose"],
["Draw!", "tie"],
["Lizard poisons Spock!", "win"]];


const spock = 
[["Spock vaporizes The Rock", "win"],
["Paper disproves Spock!", "lose"],
["Spock smashes scissors!", "win"],
["Lizard poisons Spock!", "lose"],
["Draw!", "tie"]];

function main(){
    
    // console.log(throwRock());

}


function throwX(playerChoice){
  rnJesus = Math.ceil(Math.random()*5 -1);

  $("#" + rnJesus).slideDown(1000).delay(1000).slideUp(1000);
  

  winCondition(playerChoice[rnJesus]);
}

function winCondition(result){

  $("#result").text(result[0]).slideDown(1000).delay(1000).slideUp(1000);

  if(result[1] === "win"){
    wins++;
    $("#win-score").text(wins);
  }
  else if(result[1] === "lose"){
    losses++;
    $("#loss-score").text(losses);
    reverbFart.play();
  }
  else{
    draws++;
    $("#draw-score").text(draws);
    $("#result").text("Draw!");
  }
 }
