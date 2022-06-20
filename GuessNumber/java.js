const number = Math.round(Math.random() * 100);
console.log(number);
let text = '';
let tryNumber = 0;
const btn = document.getElementById('load');
document.getElementById("directive").innerText = 'Welcome to codeX Game';
document.getElementById("attempt").innerText = 'Number of attemps : ' + tryNumber;

function guessNumber() {
    const guess = document.querySelector("input").value;
    // guess.value = '';
    if (tryNumber > 4) {
        text = 'Sorry, You Failed!';

    } else if (parseInt(guess) == number) {
        text = "Congrualations!";

    } else {
        text = 'try again';
        (number > guess) ? text += ' UP': text += ' DOWN';

    }
    tryNumber++;
    document.getElementById("directive").innerText = text;
    document.getElementById("attempt").innerText = 'Number of attemps : ' + tryNumber;
}