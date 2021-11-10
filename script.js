
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



