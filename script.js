
main()

function main(){
    
    console.log(throwRock());

}


function throwRock(){

    rnJesus = Math.ceil(Math.random()*5)
    console.log(rnJesus);
    const rock = 
    [["Draw!", "tie"],
    ["Paper covers the Rock!", "lose"],
    ["The Rock crushes scissors!", "win"],
    ["The Rock crushes lizard!", "win"],
    ["Spock vaporizes The Rock!", "lose"]];
    
    return(rock[rnJesus-1])

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

}
