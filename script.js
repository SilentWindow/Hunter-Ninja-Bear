//Caching the DOM; aka defining our variables

let userScore = 0;
let comScore = 0;
const userScore_span = document.getElementById("userScore");
const comScore_span = document.getElementById("comScore");
const score_div = document.querySelector(".score");
const result_div = document.querySelector(".Win");
const hunter_div = document.getElementById("h");
const ninja_div = document.getElementById("n");
const bear_div = document.getElementById("b");

//use random math and rounding down to choose one of the three array options
function getComChoice() {
    const choices = ['h', 'n', 'b'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//if the user wins add 1 to user score
function win() {
    userScore++;
    userScore_span.innerHTML = userScore;
}

//if the computer wins add 1 to the computer score
function lose(b) {
    comScore++;
    comScore_span.innerHTML = comScore;
}

//compare user choice with computer choice and output a result to the html based on the winner, and log it to the console
function game(userChoice) {
    const comChoice = getComChoice();
    switch(userChoice + comChoice) {
        case "hb":
            result_div.innerHTML = "Hunter shoots Bear YOU WIN";
            win();
            console.log(userChoice + comChoice);
            document.getElementById(userChoice).classList.add("green-glow");
            setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow')}, 250    ); 
            break;

        case "nh":
            result_div.innerHTML = "Ninja kills Hunter YOU WIN";
            win();
            console.log(userChoice + comChoice);
            document.getElementById(userChoice).classList.add("green-glow");
            setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow')}, 250); 
            break;

        case "bn":
            result_div.innerHTML = "Bear eats Ninja YOU WIN";
            win();
            console.log(userChoice + comChoice);
            document.getElementById(userChoice).classList.add("green-glow");
            setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow')}, 250); 
            break;

        case "hn":
            result_div.innerHTML = "Hunter is killed by Ninja YOU LOSE";
            lose();
            document.getElementById(userChoice).classList.add("red-glow");
            setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow')}, 250);        
            console.log(userChoice + comChoice);
            break;

        case "nb":
            result_div.innerHTML = "Ninja is eaten by Bear YOU LOSE";
            lose();
            document.getElementById(userChoice).classList.add("red-glow");
            setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow')}, 250);        
            console.log(userChoice + comChoice);
            break;

        case "bh":
            result_div.innerHTML = "Bear is shot by Hunter YOU LOSE";
            lose();
            document.getElementById(userChoice).classList.add("gray-glow");
            setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow')}, 250);        
            console.log(userChoice + comChoice);
            break;

        case "hh":
            result_div.innerHTML = "Hunters shoot eachother, ITS A DRAW";
            console.log(userChoice + comChoice);
            document.getElementById(userChoice).classList.add("gray-glow");
            setTimeout(function() { document.getElementById(userChoice).classList.remove('gray-glow')}, 250);        
            break;

        case "nn":
            result_div.innerHTML = "Ninjas kill eachother, ITS A DRAW";
            console.log(userChoice + comChoice);
            document.getElementById(userChoice).classList.add("gray-glow");
            setTimeout(function() { document.getElementById(userChoice).classList.remove('gray-glow')}, 250);        
            break;

        case "bb":
            result_div.innerHTML = "Bears eat eachother, ITS A DRAW";
            console.log(userChoice + comChoice);
            document.getElementById(userChoice).classList.add("gray-glow");
            setTimeout(function() { document.getElementById(userChoice).classList.remove('gray-glow')}, 250);        
            break;
    }
}

//define each button as interactable and pass through the choice to the compare function
function main() {
    hunter_div.addEventListener('click', function() {
        game("h");
    })

    ninja_div.addEventListener('click', function() {
        game("n");
    })

    bear_div.addEventListener('click', function() {
        game("b");
    })
}

//run the game

main();