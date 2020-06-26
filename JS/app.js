var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
    const choice = ['r', 'p', 's'];
    const random = Math.floor(Math.random()* 3);
    return choice[random];
}

function convertToWord(letter){
    if(letter === "r") return "Rock 🗿";
    else if(letter === "p") return "Paper 📃";
    return "Scissors ✂️";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML ="Your "+ convertToWord(userChoice) + " Beats Computer's " + convertToWord(computerChoice) + ", You Win!"
    scoreBoard_div.classList.add('green-glow');
    setTimeout(function() {scoreBoard_div.classList.remove('green-glow')}, 300)
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML ="Computer's "+ convertToWord(computerChoice) + " Beats Your " + convertToWord(userChoice) + ", You Lost!"
    scoreBoard_div.classList.add('red-glow');
    setTimeout(function() {scoreBoard_div.classList.remove('red-glow')}, 300)
}

function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML = "You Both got "+ convertToWord(computerChoice) + ", It's A Draw!"
    scoreBoard_div.classList.add('gold-glow');
    setTimeout(function() {scoreBoard_div.classList.remove('gold-glow')}, 300)
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
            case "rp":
            case "ps":
            case "sr":
            lose(userChoice, computerChoice);
            break;
            case "rr":
            case "pp":
            case "ss":
            draw(userChoice, computerChoice);
            break;

    }
}

function main(){

rock_div.addEventListener('click', function(){
    game("r");
})

scissor_div.addEventListener('click', function(){
    game("s");
})
paper_div.addEventListener('click', function(){
    game("p");
})
}

main();