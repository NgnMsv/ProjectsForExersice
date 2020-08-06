const p1Button = document.getElementById('p1');
const p2Button = document.querySelector('#p2');
const h1 = document.querySelector('h1');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.getElementById('p2Display');
const reset = document.getElementById('reset');
const numInput = document.querySelector('input');
const winningScoreDisplay = document.getElementById('winningScoreDisplay');
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;

p1Button.addEventListener('click' , function () {
    if (!gameOver){
        p1Score++;
        if (p1Score === winningScore){
            gameOver = true;
            p1Display.classList.add('winner')
        }
        p1Display.textContent = p1Score.toString();
    }
});

p2Button.addEventListener( 'click' , function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            gameOver = true;
            p2Display.classList.add('winner');
        }
        p2Display.textContent = p2Score.toString();
    }});

reset.addEventListener('click' , resetGame);

function resetGame() {
    p1Score = 0 ;
    p2Score = 0;
    p1Display.textContent = '0';
    p1Display.classList.remove('winner')
    p2Display.textContent = '0';
    p2Display.classList.remove('winner');
    gameOver = false;
}
numInput.addEventListener('change' , function () {
    resetGame();
    winningScore = Number(this.value);
    winningScoreDisplay.textContent = this.value;
});