
let wins = 0;
let draws = 0;
let losses = 0;



function throwPaper(){

 let rnJesus = Math.ceil(Math.random()*5 - 1)

const paper =
[["Paper covers The Rock!", "win"],
["Draw!", "tie"],
["Scissors cuts paper!", "lose"],
["Lizard eats paper!", "lose"],
["Paper disproves Spock!", "win"]];

console.log(rnJesus)
console.log(paper[rnJesus])
let result = paper[rnJesus]
console.log(result[1])
if(result[1] === "win"){
  wins++
  $("#win-score").text(wins)
  $("#result").text(result[0])
}
else if(result[1] === "lose"){
  losses++
  $("#loss-score").text(losses)
  $("#result").text(result[0])
}
else{
  draws++
  $("#draw-score").text(draws)
  $("#result").text("Draw!")

}

}


function main(){
    
    // console.log(throwRock());

}


function throwRock(){

    rnJesus = Math.ceil(Math.random()*5 -1)
    console.log(rnJesus);
    const rock = 
    [["Draw!", "tie"],
    ["Paper covers the Rock!", "lose"],
    ["The Rock crushes scissors!", "win"],
    ["The Rock crushes lizard!", "win"],
    ["Spock vaporizes The Rock!", "lose"]];
    
    console.log(rock[rnJesus])

    $("#" + rnJesus).show(1000).delay(1000).hide(1000)

}

function throwPaper(){

    rnJesus = Math.ceil(Math.random()*5)

    const paper =
    [["Paper covers The Rock!", win],
    ["Draw!", tie],
    ["Scissors cuts paper!", lose],
    ["Lizard eats paper!", lose],
    ["Paper disproves Spock!", win]];

    winFunction(paper[rnJesus-1])

}

function throwScissors(){

    rnJesus = Math.ceil(Math.random()*5)

    const scissors =
    [["The Rock crushes scissors!", lose],
    ["Scissors cut paper!", win],
    ["Draw!", tie],
    ["Scissors decapitate lizard!", win],
    ["Spock smashes scissors!", lose]];

    winFunction(scissors[rnJesus-1])

}

function throwLizard(){

    rnJesus = Math.ceil(Math.random()*5)

    const lizard = 
    [["The Rock crushes lizard!", lose],
    ["Lizard eats paper!", win],
    ["Scissors decapitate lizard!", lose],
    ["Draw!", tie],
    ["Lizard poisons Spock!", win]];

    winFunction(lizard[rnJesus-1])

}

function throwSpock(){

    rnJesus = Math.ceil(Math.random()*5)

    const spock = 
    [["Spock vaporizes The Rock", win],
    ["Paper disproves Spock!", lose],
    ["Spock smashes scissors!", win],
    ["Lizard poisons Spock!", lose],
    ["Draw!", tie]];

    winFunction(spock[rnJesus-1])

