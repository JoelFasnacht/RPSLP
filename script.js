
main()

function main(){
console.log(throwRock());

}


function throwRock(){

  rnJesus = Math.ceil(Math.random()*5)

  if(response == 1){
    return "Draw!";
  }
  else if(response == 2){
    // scoreAI()
    return "Paper covers the Rock!"
  }
  else if(response == 3){
    // scoreYou()
    return "The Rock crushes scissors!"
  }
  else if(response == 4){
    // scoreYou()
    return "The Rock crushes lizard!"
  }
  else if(response == 5){
    // scoreAI()
    return "Spock vaporizes The Rock!"
  }
  
}

function throwPaper(){

  rnJesus = Math.ceil(Math.random()*5)

const paper =
[["Paper covers The Rock!",win],
["Draw!",tie],
["Scissors cuts paper!",lose],
["Lizard eats paper!",lose],
["Paper disproves Spock!",win]];



winFunction(paper[rnJesus-1])

}

function throwScissors(){
  rnJesus = Math.ceil(Math.random()*5)

  if(response == 1){
    return "The Rock crushes scissors!"
  }
  else if(response == 2){
    return "Scissors cut paper!"
  }
  else if(response == 3){
    return "Draw!";
  }
  else if(response == 4){
    return "Scissors decapitate lizard!"
  }
  else if(response == 5){
    return "Spock smashes scissors!"
  }

}
function throwLizard(){
  rnJesus = Math.ceil(Math.random()*5)

  if(response == 1){
    return "The Rock crushes lizard";
  }
  else if(response == 2){
    return "Lizard eats paper!"
  }
  else if(response == 3){

    return "Scissors decapitate lizard!"
  }
  else if(response == 4){
    return "Draw!";
  }
  else if(response == 5){

    return "Lizard poisons Spock!"
  }

}

function throwSpock(){
  rnJesus = Math.ceil(Math.random()*5)

  if(response == 1){
    return "Spock vaporizes The Rock";
  }
  else if(response == 2){
    return "Paper disproves Spock!"
  }
  else if(response == 3){
    return "Spock smashes scissors!"
  }
  else if(response == 4){

    return "Lizard poisons Spock!"
  }
  else if(response == 5){

    return "Draw!";
  }

}
