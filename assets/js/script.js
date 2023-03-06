const numberOne = document.querySelector('.number1');
const numberTwo = document.querySelector('.number2');
const answer = document.querySelector('.answer');
const score = document.querySelector('.score');

let number1 = 0;
let number2 = 0;
let isHigherThanOne = false;
let currentScore = 0;
let time = 5000;

//A function to validate whether the answer was correct
async function buttonClicked(guess) {
    if (guess === 'higher') {
        if (isHigherThanOne) {
            result = 'Correct!'
            currentScore = ++currentScore
            time = time + 250
        } else {
            result = 'Wrong :('
            time = time - 500
        }
    }

     if (guess === 'lower') {
        if (isHigherThanOne) {
            result = 'Wrong :('
        } else {
            result = 'Correct!'
            currentScore = ++currentScore
        }
    }

    score.innerHTML = currentScore  
    answer.innerHTML = result;

    await giveResult()

    gameLoop()
}

async function giveResult(result) {
    await setTimeout(() => {
        answer.innerHTML = '';
    }, 1000)
}

//A function to randomise the numbers for first 5 levels
function randomiseIntEasy(max) {
    return Math.floor(Math.random() * (max + 1));

}

//A function to check if number 2 is higher than number 1
function isHigher (number1, number2) {
    return number2 > number1;
}

//A function to allow you to reset the game score
function resetScore() {
    currentScore = 0;
    score.innerHTML = currentScore;
    gameLoop()
}

//A function to insert the randomised numbers into the index file
function gameLoop() {
    document.querySelector('.number1').style.visibility = "visible";
    document.querySelector('.number2').style.visibility = "visible";
    number1 = randomiseIntEasy(10000);
    number2 = randomiseIntEasy(10000);
    
    numberOne.innerHTML = number1;
    numberTwo.innerHTML = number2;
    isHigherThanOne = isHigher(number1, number2);
}

gameLoop()
